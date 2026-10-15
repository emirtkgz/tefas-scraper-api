import { header, Urls } from "../constants.js";
import { _tefas_fetch } from "../tefas_fetch.js"


/** @class */
export class TefasStatistics {
    /**
     * Returns the list of all funds on TEFAS
     * @route /api/statistics/tefas/getFplFonList
     * @returns {JSON} An array containing all funds with their relative informations
     */
    static async fetchFundList() {
        let response = await _tefas_fetch(
           Urls.fund_list_url,
            {
                method: "POST",
                headers: header,
                body: "{}"
            },
            this.fetchFundList.name
        )

        return response?.["data"]
    }

    /**
     * Returns the list of all forex currencies used for the website
     * @route /api/statistics/tefas/getFplDovizList/v2
     * @returns {JSON} An array containing the currencies
     */
    static async fetchForexList() {
        let response = await _tefas_fetch(
            `${Urls.base_url}${Urls.forex_list_url}`,
            {
                method: "POST",
                headers: header,
                body: `{"fonKodu":"","dil":"TR"}` // Website actually uses this body
            },
            this.fetchForexList.name
        )

        return response?.["data"]
    }
};