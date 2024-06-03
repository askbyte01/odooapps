# -*- coding: utf-8 -*-

from odoo import api, fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    is_shown_product_int_ref = fields.Boolean("Is Shown Product Internal Reference?",config_parameter='abt_website_product_internal_reference.is_shown_product_int_ref')
    internal_reference_font_size = fields.Char("Font Size",config_parameter='abt_website_product_internal_reference.internal_reference_font_size')
    internal_reference_font_color = fields.Char("Font Color",default='#000000',config_parameter='abt_website_product_internal_reference.internal_reference_font_color')
    is_internal_reference_font_bold = fields.Boolean("Is Font Bold?",config_parameter='abt_website_product_internal_reference.is_internal_reference_font_bold')
