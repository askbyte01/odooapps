# -*- coding: utf-8 -*-

{
    "name"        : "Website Product Internal Reference",
    "author"      : "AskByte Technolab",
    "category"    : "Website",
    "summary"     : """Website Product Internal Reference""",
    "description" : """  """,
    "version"     : "16.0.1.0",
    "price"       : "10.0",
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
