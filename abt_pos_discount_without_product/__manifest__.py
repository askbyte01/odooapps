# -*- coding: utf-8 -*-
{
    "name": "POS Discount Without Discount Product",
    "version": "16.0.1.0.1",
    "category": "Point of Sale",
    "price": "7.0",
    "currency": "USD",
    "summary": "Apply discounts in POS without needing a discount product line.",
    "description": """
POS Discount Without Discount Product
=====================================

This module allows you to apply discounts in Point of Sale 
without creating a discount product.

Features:
---------
✅ Applies % discount directly to each product line  
✅ No fake 'discount product' line needed  
✅ Cleaner POS orders & receipts  
✅ Works with Odoo 16 Point of Sale  

Perfect for businesses that want simple, clear POS receipts without discount products.
    """,
    "author": "AskByte Technolab",
    "website": "https://askbytetechnolab.com",
    "depends": ["point_of_sale"],
    "data": [],
    "assets": {
        "point_of_sale.assets": [
            "abt_pos_discount_without_product/static/src/js/DiscountButtonExt.js",
        ],
    },
    "license": "LGPL-3",
    "installable": True,
    "application": False,
}
