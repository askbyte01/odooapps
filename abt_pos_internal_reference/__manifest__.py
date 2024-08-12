# -*- coding: utf-8 -*-
{
    'name': 'POS Internal References',
    'author': "AskByte Technolab",
    'summary': """Added internal references for improved tracking.""",
    'description': """
        Internal references are now integrated into the Product Screen, Order Lines, 
        and Receipts, enhancing product management and accuracy throughout transactions.
    """,
    'category': 'Point of Sale',
    'version': '16.0.1.0',
    'depends': ['base', 'point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'abt_pos_internal_reference/static/src/xml/Screens/ProductScreen/ProductItem.xml',
            'abt_pos_internal_reference/static/src/xml/Screens/ReceiptScreen/ReceiptScreen.xml',
            'abt_pos_internal_reference/static/src/js/models.js',
            'abt_pos_internal_reference/static/src/xml/Screens/ProductScreen/Orderline.xml'
        ],
    },
    'license': 'LGPL-3',
    "installable" : True,
    "application" : True,
    "auto_install": False,
}
