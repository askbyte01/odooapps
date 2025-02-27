/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import {
    productLabelSectionAndNoteOne2Many,
    ProductLabelSectionAndNoteOne2Many,
    ProductLabelSectionAndNoteListRender,
} from '@account/components/product_label_section_and_note_field/product_label_section_and_note_field';

patch(ProductLabelSectionAndNoteListRender.prototype, {
    getActiveColumns(list) {
        return this.allColumns.filter((col) => {
            if (list.isGrouped && col.widget === "handle") {
                return false; // no handle column if the list is grouped
            }
            if (col.optional && !this.optionalActiveFields[col.name]) {
                return false;
            }
            if (this.evalColumnInvisible(col.column_invisible)) {
                return false;
            }
            return true;
        });
    }
});
