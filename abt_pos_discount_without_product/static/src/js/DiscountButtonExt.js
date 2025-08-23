odoo.define('abt_pos_discount_without_product.DiscountButtonExt', function(require) {
    'use strict';

    const DiscountButton = require('pos_discount.DiscountButton');
    const Registries = require('point_of_sale.Registries');

    const DiscountButtonOverride = (DiscountButton) =>
        class extends DiscountButton {
            async onClick() {
            // Step 1: Ask user for type of discount
            const { confirmed: discountTypeConfirmed, payload: discountType } = await this.showPopup('SelectionPopup', {
                title: this.env._t('Choose Discount Type'),
                list: [
                    { id: 'line', label: this.env._t('Per Line Discount'), item: 'line' },
                    { id: 'global', label: this.env._t('Global Discount (Single Line)'), item: 'global' },
                ],
            });

            if (!discountTypeConfirmed) return;

            // Step 2: Ask for discount percentage
            const { confirmed: percentConfirmed, payload } = await this.showPopup('NumberPopup', {
                title: this.env._t('Discount Percentage'),
                startingValue: this.env.pos.config.discount_pc,
                isInputSelected: true
            });

            if (!percentConfirmed) return;

            const val = Math.max(0, Math.min(100, parseFloat(payload)));
            const order = this.env.pos.get_order();

            // Step 3: Reset previous discounts before applying the new one
            if (discountType === 'line') {
                // Reset all existing line discounts
                var product  = this.env.pos.db.get_product_by_id(this.env.pos.config.discount_product_id[0]);

                var lines    = order.get_orderlines();
                lines.filter(line => line.get_product() === product)
                .forEach(line => order.remove_orderline(line));

                // Apply new line-level discount
                for (let line of order.get_orderlines()) {
                    line.set_discount(val);
                }
            } else if (discountType === 'global') {
                // Global discount cleanup is handled in apply_discount()
                for (let line of order.get_orderlines()) {
                    line.set_discount(0); // Remove existing discounts
                }
                await this.apply_discount(val);
            }
        }
        };

    Registries.Component.extend(DiscountButton, DiscountButtonOverride);

    return DiscountButton;
});
