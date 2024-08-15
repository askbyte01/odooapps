odoo.define('abt_pos_total_item_qty_display.OrderReceipt', function(require) {
    'use strict';

    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');

    const OrderReceiptInherit = OrderReceipt => class extends OrderReceipt {

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

        get_total_item() {
            const posConfig = this.env.pos.config;
            if (posConfig.is_total_items) {
                const order = this.env.pos.get_order();
                const totalItems = order.orderlines.length;
                return totalItems;
            }
        }
    };

    Registries.Component.extend(OrderReceipt, OrderReceiptInherit);
    return OrderReceipt;
});
