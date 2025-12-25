/** @odoo-module **/
import { constructFullProductName, constructAttributeString } from "@point_of_sale/utils";

import { patch } from "@web/core/utils/patch";
import { PosOrderline } from "@point_of_sale/app/models/pos_order_line";

patch(PosOrderline.prototype, {

setFullProductName() {
    this.full_product_name = constructFullProductName(this);
    if (this.product_id?.default_code) {
        this.full_product_name =
            `${this.full_product_name} [${this.product_id.default_code}]`;
    }
},


get orderDisplayProductName() {
    const productName = this.product_id?.name || '';
    const defaultCode = this.product_id?.default_code;

    // Format: "Product Name [REF]"
    const displayName = defaultCode 
        ? `${productName} [${defaultCode}]` 
        : productName;

    return {
        name: displayName,
        attributeString: constructAttributeString(this),
    };
}

});

