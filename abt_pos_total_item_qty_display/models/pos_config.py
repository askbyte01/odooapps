# -- coding: utf-8 --

from odoo import api, fields, models, _

class PosConfig(models.Model):
    _inherit = "pos.config"

    is_total_qty = fields.Boolean(string='Is Total Qty?')
    is_total_items = fields.Boolean(string='Is Total Items?')	
