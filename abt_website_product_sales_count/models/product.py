# -*- coding: utf-8 -*-

from odoo import fields, models, _

class ProductProduct(models.Model):
    _inherit = 'product.product'

    show_sold_count = fields.Boolean(
        string='Show Sold Count on Website',
        default=False,
    )
