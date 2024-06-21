odoo.define('l10n_pe_website_sale.website_sale', function (require) {
'use strict';

var core = require('web.core');
var config = require('web.config');
var publicWidget = require('web.public.widget');
const {extraMenuUpdateCallbacks} = require('website.content.menu');

publicWidget.registry.WebsiteSale.include({
    events: _.extend({}, publicWidget.registry.WebsiteSale.prototype.events, {
        "change select[name='state_id']": "_onChangeState",
        "change select[name='city_id']": "_onChangeCity",
    }),

    start: function () {
        this.elementCities = document.querySelector("select[name='city_id']");
        this.elementDistricts = document.querySelector("select[name='l10n_pe_district']");
        this.cityBlock = document.querySelector(".div_city");
        this.autoFormat = document.querySelector(".checkout_autoformat");
        this.elementState = document.querySelector("select[name='state_id']");
        this.elementCountry = document.querySelector("select[name='country_id']");
        this.isPeruvianCompany = this.elementCountry?.dataset.company_country_code === 'PE';
        return this._super.apply(this, arguments);
    },

    _onChangeState: async function () {
        if (this.isPeruvianCompany) {
            if (this.elementState.value === "" && this.elementCountry.value !== '') {
                this.elementState.options[0].selected = true;
            }
            const state = this.elementState.value;

            if (!state) {
                return;
            }

            try {
                const data = await this._rpc({
                    route: `/shop/state_infos/${state}`,
                    params: {}
                });

                if (data["cities"]?.length) {
                    this.elementCities.innerHTML = "";
                    data["cities"].forEach((item) => {
                        let opt = document.createElement("option");
                        opt.textContent = item[1];
                        opt.value = item[0];
                        opt.setAttribute("data-code", item[2]);
                        this.elementCities.appendChild(opt);
                    });
                    this.elementCities.parentElement.style.display = "block";
                } else {
                    this.elementCities.value = "";
                    this.elementCities.parentElement.style.display = "none";
                }

                await this._onChangeCity();
            } catch (error) {
                console.error("Error fetching state data:", error);
            }
        }
    },

    _onChangeCity: async function () {

        if (this.isPeruvianCompany) {
            const city = this.elementCities.value;

            if (!city) {
                return;
            }

            try {
                const data = await this._rpc({
                    route: `/shop/city_infos/${city}`,
                    params: {}
                });

                const districts = data["districts"];
                if (districts?.length) {
                    this.elementDistricts.innerHTML = "";
                    districts.forEach((item) => {
                        let opt = document.createElement("option");
                        opt.textContent = item[1];
                        opt.value = item[0];
                        opt.setAttribute("data-code", item[2]);
                        this.elementDistricts.appendChild(opt);
                    });
                    this.elementDistricts.parentElement.style.display = "block";
                } else {
                    this.elementDistricts.value = "";
                    this.elementDistricts.parentElement.style.display = "none";
                }
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        }
    },

    _onChangeCountry: async function (ev) {

        this._super.apply(this, arguments);

        if (this.isPeruvianCompany) {
            let selectedCountry = ev.currentTarget.options[ev.currentTarget.selectedIndex].getAttribute("code");
            let cityInput = document.querySelector(".form-control[name='city']");
            await new Promise(resolve => setTimeout(resolve, 900));

            if (selectedCountry == "PE") {
                if (cityInput.value) {
                    cityInput.value = "";
                }
                this.cityBlock.classList.add("d-none");
                // Clear state selection and re-fetch states
                this._onChangeState().then(() => {
                    this._onChangeCity();
                });
            } else {
                this.cityBlock.querySelectorAll("input").forEach((input) => {
                    input.value = "";
                });
                this.cityBlock.classList.remove("d-none");
                this.elementCities.value = "";
                this.elementCities.parentElement.style.display = "none";
                this.elementDistricts.value = "";
                this.elementDistricts.parentElement.style.display = "none";
            }
        }
    },
});

return publicWidget.registry.WebsiteSale;
});
