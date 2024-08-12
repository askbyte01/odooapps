odoo.define('abt_pos_internal_reference.models', function (require) {
    "use strict";

    var { Order, Orderline } = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries'); 

    const PosSaleOrderline = (Orderline) => class PosSaleOrderline extends Orderline {
        constructor(obj, options) {
            super(...arguments);
        }
        export_for_printing() {
            var result = super.export_for_printing(...arguments);
            result.default_code =  this.get_product().default_code;
            return result;
        }
    }
    Registries.Model.extend(Orderline, PosSaleOrderline);
});
