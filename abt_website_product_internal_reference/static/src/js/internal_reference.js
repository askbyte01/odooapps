odoo.define('abt_website_product_internal_reference.internal_reference', function (require) {
    'use strict';
    var ajax = require('web.ajax');

    $(document).ready(function(){
        $('.product_id').change(function(){
            var productId = document.querySelector('.product_id')?.value;
            ajax.jsonRpc('/get_product_id', "call", {
                'product_id': productId
            }).then(function(data){
                var productInternalReferenceElem = document.getElementById('product_internal_reference');
                if (productInternalReferenceElem) {
                    productInternalReferenceElem.innerText = data.default_code;

                    if (data.product_internal_reference === "True" && data.default_code.trim() !== "") {
                        $('.box').show();
                    } else {
                        $('.box').hide();
                    }
                }
            });
        });
    });
});

