# -*- coding: utf-8 -*-
{
    "name"        : "Separate Customer Invoice",
    "author"      : "AskByte Technolab",
    "category"    : "Sales/Sales",
    "summary"     : """Separate Customer Invoice """,
    "description" : """ """,
    "version"     : "17.0.1.0",
    "price"       : "7.0",
    "currency"    : "USD",
    "depends"     : ["sale_management","stock"],
    "data"        : [
        'wizard/sale_make_invoice_advance_views.xml',
        'views/sale_order_views.xml',
    ],
    "license"     : "LGPL-3",
    "installable" : True,
    "application" : True,
    "auto_install": False,
}
