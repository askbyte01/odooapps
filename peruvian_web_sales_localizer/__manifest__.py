# -*- coding: utf-8 -*-
{
    "name": "Peruvian Web Sales Localizer",
    "countries": ["pe"],
    "version": "15.0.1.0",
    "summary": "Be able to see Identification Type in ecommerce checkout form.",
    "category": "Accounting/Localizations/Website",
    "author": "AskByte Technolab",
    "license": "LGPL-3",
    "price": "11.0",
    "currency": "USD",
    "depends": [
        "website_sale",
        "l10n_pe",
    ],
    "data": [
        "security/ir.model.access.csv",
        "data/ir_model_fields.xml",
        "views/templates.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "peruvian_web_sales_localizer/static/src/js/website_sale.js",
        ],
    },
    "installable": True,
    "auto_install": True,
}
