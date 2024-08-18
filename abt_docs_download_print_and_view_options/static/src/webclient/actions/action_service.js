/** @odoo-module **/

import { registry } from "@web/core/registry";
import { download } from "@web/core/network/download";
var session = require('web.session');

let iframeForReport;

// Creates an iframe for printing PDFs
function printPdf(url, callback) {
    let iframe = iframeForReport;
    if (!iframe) {
        iframe = iframeForReport = document.createElement('iframe');
        iframe.className = 'pdfIframe';
        document.body.appendChild(iframe);
        iframe.style.display = 'none';
        iframe.onload = function () {
            setTimeout(function () {
                iframe.focus();
                iframe.contentWindow.print();
                URL.revokeObjectURL(url);
                callback();
            }, 1);
        };
    }
    iframe.src = url;
}

// Triggers the download of the report in PDF format
async function _triggerDownload(action, options, type, env) {
    const url = getReportUrl(action, type);
    env.services.ui.block();
    try {
        await download({
            url: "/report/download",
            data: {
                data: JSON.stringify([url, action.report_type]),
                context: JSON.stringify(env.services.user.context),
            },
        });
    } finally {
        env.services.ui.unblock();
    }
    const onClose = options.onClose;
    if (action.close_on_report_download) {
        return doAction({ type: "ir.actions.act_window_close" }, { onClose });
    } else if (onClose) {
        onClose();
    }
}

// Constructs the URL for the report, adding context and options as necessary
function getReportUrl(action, type) {
    let url = `/report/${type}/${action.report_name}`;
    const actionContext = action.context || {};
    if (action.data && JSON.stringify(action.data) !== "{}") {
        const options = encodeURIComponent(JSON.stringify(action.data));
        const context = encodeURIComponent(JSON.stringify(actionContext));
        url += `?options=${options}&context=${context}`;
    } else {
        if (actionContext.active_ids) {
            url += `/${actionContext.active_ids.join(",")}`;
        }
        if (type === "html") {
            const context = encodeURIComponent(JSON.stringify(env.services.user.context));
            url += `?context=${context}`;
        }
    }
    return url;
}

let wkhtmltopdfStateProm;

// Registers a handler for PDF report options
registry
    .category("ir.actions.report handlers")
    .add("pdf_report_options_handler", async function (action, options, env) {
        const link = '<br><br><a href="http://wkhtmltopdf.org/" target="_blank">wkhtmltopdf.org</a>';
        const WKHTMLTOPDF_MESSAGES = {
            broken: env._t(
                "Your installation of Wkhtmltopdf seems to be broken. The report will be shown " +
                "in html."
            ) + link,
            install: env._t(
                "Unable to find Wkhtmltopdf on this system. The report will be shown in html."
            ) + link,
            upgrade: env._t(
                "You should upgrade your version of Wkhtmltopdf to at least 0.12.0 in order to " +
                "get a correct display of headers and footers as well as support for " +
                "table-breaking between pages."
            ) + link,
            workers: env._t(
                "You need to start Odoo with at least two workers to print a pdf version of " +
                "the reports."
            ),
        };

        // Check the state of wkhtmltopdf before proceeding
        if (!wkhtmltopdfStateProm) {
            wkhtmltopdfStateProm = env.services.rpc("/report/check_wkhtmltopdf");
        }
        const state = await wkhtmltopdfStateProm;

        // Display appropriate notification based on the state of wkhtmltopdf
        if (state in WKHTMLTOPDF_MESSAGES) {
            env.services.notification.add(WKHTMLTOPDF_MESSAGES[state], {
                sticky: true,
                title: env._t("Report"),
            });
        }

        // Handle PDF actions based on wkhtmltopdf state and user groups
        if (state === "upgrade" || state === "ok") {
            const url = getReportUrl(action, "pdf");

            async function handlePdfActions() {
                try {
                    const [downloadGroup, printGroup, openGroup] = await Promise.all([
                        session.user_has_group('abt_docs_download_print_and_view_options.group_download_pdf'),
                        session.user_has_group('abt_docs_download_print_and_view_options.group_print_pdf'),
                        session.user_has_group('abt_docs_download_print_and_view_options.group_open_pdf')
                    ]);

                    if (downloadGroup || printGroup) {
                        if (printGroup) {
                            env.services.ui.block();
                            printPdf(url, () => {
                                env.services.ui.unblock();
                            });
                        } else {
                            _triggerDownload(action, options, "pdf", env);
                        }
                    } else if (openGroup) {
                        window.open(url);
                    } else {
                        _triggerDownload(action, options, "pdf", env);
                    }
                } catch (error) {
                    console.error('Error checking user groups or handling PDF:', error);
                }
            }
            handlePdfActions();
            return true;
        } else {
            // Open the report in the client action if generating the PDF is not possible
            return _executeReportClientAction(action, options);
        }
    });
