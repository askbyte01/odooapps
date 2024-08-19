# -*- coding: utf-8 -*-
{
    "name"        : "User Wise Report Download, Open, and Print Options",
    "author"      : "AskByte Technolab",
    "category"    : "Technical",
    "summary"     : """This module enables PDF management with options to download, view online, or print.""",
    "description" : """ 
        It provides functionalities to save a PDF locally, view it within 
        a browser or app, and print it directly from the device.
    """,
    "version"     : "16.0.1.0",
    "price"       : "15.0",
    "currency"    : "USD",
    "depends"     : ["base"],
    "data"        : [
        'security/security.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'abt_user_wise_report_handling_options/static/src/webclient/actions/action_service.js'
        ],
    },
    "license"     : "LGPL-3",
    "installable" : True,
    "application" : True,
    "auto_install": False,
}



