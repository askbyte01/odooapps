# -*- coding: utf-8 -*-

{
    "name": "Website Product Sales Count",
    "summary": "Displays the dynamically formatted sales count on the website product page.",
    "description": """
        - Adds a boolean field to product to enable/disable the feature.
        - Displays the past year"s sales count on the website product page.
        - Formats large numbers (e.g., 1000 -> 1k, 1001 -> 1k+).
        - Hides the display if the sales count is 0 or if the feature is disabled for the product.
    """,
    "category": "Website/eCommerce",
    "version": "17.0.1.0.0",
    "depends": ["website_sale", "product"],
    "data": [
        "views/product_view.xml",
        "views/website_form.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "abt_website_product_sales_count/static/src/js/internal_reference.js",
        ],
    },
    "images": ["static/description/thumbnail.png"],
    "license": "LGPL-3",
    "installable": True,
    "application": False,
    "auto_install": False,
}
