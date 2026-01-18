# -- coding: utf-8 --

{
    "name": "POS Total Quantity & Items Display",
    "author": "AskByte Technolab",
    "category": "Point of Sale",
    "summary": "POS Total Quantity & Items Display",
    "license": "LGPL-3",
    "description": """
        Total Items and Total Quantity are displayed in the POS module 
        based on the configuration settings for showing these details.
    """,
    "version": "16.0.1.0",
    "depends": ["point_of_sale"],
    "data": [
        "views/res_config_settings_views.xml",
    ],
    "assets": {
        "point_of_sale.assets": [
            "abt_pos_total_item_qty_display/static/src/js/**/*",
            "abt_pos_total_item_qty_display/static/src/xml/**/*",
        ],
    },
    "images": ["static/description/thumbnail.png"],
    "installable": True,
    "application": True,
    "auto_install": False,
}
