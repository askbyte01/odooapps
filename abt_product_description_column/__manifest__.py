# -*- coding: utf-8 -*-
{
    "name": "Separate Product Description Column",
    "author": "AskByte Technolab",
    "summary": """The column now includes separate product and description fields.""",
    "description": """
        The column now includes separate product and description fields.
    """,
    "category": "Technical",
    "version": "19.0.1.0",
    "price": "7.0",
    "currency": "USD",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "abt_product_description_column/static/src/components/product_label_section_and_note_field/product_label_section_and_note_field.js"
        ],
    },
    "license": "LGPL-3",
    "application": True,
    "auto_install": False,
}
