/** @odoo-module **/

import { jsonrpc } from "@web/core/network/rpc_service";
function formatSalesCount(num) {

    if (num < 1000) {
        return String(num); // Less than a thousand, show as is
    }

    const absNum = Math.abs(num);
    
    // Thresholds and suffixes
    const units = [
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "m" },
        { value: 1e9, symbol: "b" } // Added for completeness, though likely overkill for sales counts
    ];

    let unit = units.slice().reverse().find(u => absNum >= u.value);
    if (!unit) {
        return String(num);
    }

    const rounded = Math.floor(absNum / unit.value); 
    const formatted = rounded + unit.symbol;

    if (absNum > (rounded * unit.value)) {
        return formatted + "+";
    }

    return formatted;
}

$(document).ready(function(){
    function updateSalesInfo(salesCount, showSoldCount) {
        var productSalesCountElem = document.getElementById('last_365_day');
        var salesInfoWrapper = document.getElementById('sales_info_wrapper');
        // 1. Get the formatted string
        var formattedSalesCount = formatSalesCount(salesCount);
        if (productSalesCountElem && salesInfoWrapper) {
            // 2. Check the raw number to determine visibility
            // We check the raw number, not the formatted string, to avoid issues like '0k'
            if (Number(salesCount) > 0 && showSoldCount) {
                // If sales count is > 0, update the text and show the wrapper
                productSalesCountElem.innerText = formattedSalesCount;
                salesInfoWrapper.style.display = 'block'; // Or 'flex', depending on original CSS
            } else {
                // If sales count is 0, hide the wrapper
                productSalesCountElem.innerText = ''; // Clear content just in case
                salesInfoWrapper.style.display = 'none';
            }
        }
    }

    $('.product_id').change(function(){
        var productId = document.querySelector('.product_id').value;
        jsonrpc('/get_product_id',{
            'product_id' : productId
        }).then(function(data){
            updateSalesInfo(data.sales_count, data.show_sold_count);
        });
     });
});
