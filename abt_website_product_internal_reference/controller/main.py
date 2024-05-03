# -*- coding: utf-8 -*-

from odoo import http, api, _
from odoo.http import request,route

class InternalReference(http.Controller):

    @http.route(['/get_product_id'], type='json', methods=['POST'], auth="public", website=True)         
    def get_product_id(self, **post):
        product_id = request.env['product.product'].sudo().browse(int(post.get("product_id")))
        product_int_ref =  request.env['ir.config_parameter'].sudo().get_param('abt_website_product_internal_reference.is_shown_product_int_ref')    
        product_ref_dict = {
                               'default_code':product_id.default_code if product_id.default_code else " ",
                               'product_internal_reference':product_int_ref 
                           }
        return product_ref_dict
