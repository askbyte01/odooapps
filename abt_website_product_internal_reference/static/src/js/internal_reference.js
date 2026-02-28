/** @odoo-module **/

import { rpc } from "@web/core/network/rpc";

$(document).ready(function(){
    $('.product_id').change(function(){
        var productId = document.querySelector('.product_id').value;
        rpc('/get_product_id',{
            'product_id' : productId
        }).then(function(data){
            var productInternalReferenceElem = document.getElementById('product_internal_reference');
            if (productInternalReferenceElem) {
                productInternalReferenceElem.innerText = data.default_code;
                if(data.product_internal_reference == "True"){
                    if(data.default_code != " "){
                        $('.box').show();
                    }
                    else{ 
                        $('.box').hide();
                    }
                }
                else{
                    $('.box').hide();
                }
            }
        });
     });
});
