# -*- coding: utf-8 -*-

from odoo import http, api, _
from odoo.http import request,route

class ProductInternalReference(http.Controller):

    @http.route(['/get_product_id'], type='json', methods=['POST'], auth="public", website=True)
    def get_product_id(self, **post):
        product_id = request.env['product.product'].sudo().browse(int(post.get("product_id")))
        product_ref_dict = {
            'sales_count':product_id.sales_count,
            'show_sold_count':product_id.show_sold_count
        }
        return product_ref_dict
