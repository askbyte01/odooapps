# -*- coding: utf-8 -*-
{
    'name': 'Internal Reference Display in POS',
    'author': "AskByte Technolab",
    'summary': """Odoo enhances POS by streamlining retail operations by 
        displaying its internal reference numbers in the product.
    """,
    'description': """
        The "Enhanced Product Display in POS" module enhances the Point of 
        Sale (POS) functionality in Odoo by displaying the internal reference 
        number of products above their names in the POS interface. This small 
        yet impactful customization provides immediate visibility of product 
        identifiers, aiding in faster and more accurate transactions.
    """,
    'category': 'Point of Sale',
    'version': '16.0.1.0',
    'depends': ['base', 'point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'abt_pos_internal_reference/static/src/xml/**/*',
        ],
    },
    'license': 'LGPL-3',
}
