# -*- coding: utf-8 -*-

from odoo import api, fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    show_product_int_ref = fields.Boolean("Internal Reference",config_parameter='abt_website_product_internal_reference.show_product_int_ref')
