# -*- coding: utf-8 -*-

from odoo import api, models

class MailComposeMessage(models.TransientModel):
    _inherit = 'mail.compose.message'

    def _prepare_mail_values(self, res_ids):
        mail_values_all = super(MailComposeMessage, self)._prepare_mail_values(res_ids)
        if (
            self.composition_mode == "comment"
            and self.template_id
            and self.template_id.reply_to
        ):
            for mail_values in mail_values_all.values():
                mail_values["reply_to"] = self.template_id.reply_to
        return mail_values_all
