odoo.define('abt_pos_total_item_qty_display.OrderSummary', function(require) {
    'use strict';

    const OrderSummary = require('point_of_sale.OrderSummary');
    const Registries = require('point_of_sale.Registries');

    const OrderSummaryInherit = OrderSummary => class extends OrderSummary {

        get_total_item() {
            const posConfig = this.env.pos.config;
            if (posConfig.is_total_items) {
                const order = this.env.pos.get_order();
                const totalItems = order.orderlines.length;
                return totalItems;
            }
        }

        get_total_qty() {
            const posConfig = this.env.pos.config;
            if (posConfig.is_total_qty) {
                const order = this.env.pos.get_order();
                let totalQty = 0;
                order.orderlines.forEach(line => {
                    totalQty += line.quantity;
                });
                return totalQty;
            }
        }
    }

    Registries.Component.extend(OrderSummary, OrderSummaryInherit);
    return OrderSummary;
});
