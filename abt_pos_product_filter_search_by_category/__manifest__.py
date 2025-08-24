# -*- coding: utf-8 -*-
{
    "name": "POS Product Filter & Search by Category",
    "author": "AskByte Technolab",
    "summary": """Filter Products in POS by Category and Search.""",
    "description": """
        Allows Filtering Products in the Point of Sale interface by
        selected Categories and Search quires.
    """,
    "category": "Point of Sale",
    "version": "18.0.1.0",
    "price": "5.0",
    "currency": "USD",
    "depends": ["point_of_sale"],
    "data":[],
    "assets": {
        "point_of_sale._assets_pos": [
            "abt_pos_product_filter_by_category_and_search/static/src/app/screens/product_screen.js",
        ],
    },
    "images": ["static/description/thumbnail.png"],
    "license": "LGPL-3",
    "application": True,
    "auto_install": False,
}


