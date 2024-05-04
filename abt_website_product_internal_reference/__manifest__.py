# -*- coding: utf-8 -*-

{
    "name"        : "Website Product Internal Reference",
    "author"      : "AskByte Technolab",
    "category"    : "Website/Website",
    "sequence"    : 1,
    "summary"     : """ Website Product Internal Reference """,
    "description" : """ Show Product Internal Reference In Webiste When Internal Reference is True For Website Configuration and Avalible Product Internal Reference In Product.
                        Internal Reference Is Changed Accoroding Change The Product Attribute And Color.
                        If Internal Reference Is Not Avalible Then Not Show The Internal Reference.
                        Choose color, size and font formatting (bold or not) in website configuration.
                        The string(Internal Reference) will appear according to the font formatting (color, size, bold or not bold) selected in the website configuration.
                    """,
    "version"     : "16.0.1.0",
    "price"       : "11.0",
    "currency"    : "USD",
    "depends"     : ["website_sale","stock"],
    "data"        : [
                      "views/templates.xml",
                      "views/res_config_settings_views.xml"
                    ],
    'assets': {
        'web.assets_frontend': [
            'abt_website_product_internal_reference/static/src/js/internal_reference.js',
        ],
    },
    "license"     : "OPL-1",
    "installable" : True,
    "application" : True,
    "auto_install": False,
}
