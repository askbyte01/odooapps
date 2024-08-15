# -- coding: utf-8 --

from odoo import api, fields, models, _

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    is_total_qty = fields.Boolean(string='Is Total Qty?',related="pos_config_id.is_total_qty",readonly=False,config_parameter='abt_pos_total_item_qty_display.is_total_qty')
    is_total_items = fields.Boolean(string='Total Items',related="pos_config_id.is_total_items",readonly=False,config_parameter='abt_pos_total_item_qty_display.is_total_items')
