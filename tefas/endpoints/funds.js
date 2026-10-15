import { header, Urls } from "../constants.js";
import { Periods } from "../periods.js";
import { _tefas_fetch } from "../tefas_fetch.js"

/** @class */
export class TefasFunds {
    constructor(tefas) {
        this.tefas = tefas;
    }

    /**
     * Fetches the historical price data of the fund
     * @route /api/funds/fonFiyatBilgiGetir
     * @param {Number} period Can only be weekly (13), YTD(0), 1 month(1), 3 months(3), 6 months(6), 1 year(12), 3 years(36), 5 years(60) <br>
     * Default to 1 month
     * 
     * @returns {JSON} Historical price data as returned by the API
     */
    async fetchPrice(period = Periods.ONE_MONTH) {
        let response = await _tefas_fetch
        (
            Urls.price_url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify({
                    "fonKodu": this.tefas.name,
                    "dil": "TR",
                    "periyod": String(period)
                })
            },
            this.fetchPrice.name
        )

        return response?.["resultList"]
    }

    /**
     * Fetches the type of the fund
     * @route /api/funds/fonTipiGetir
     * @returns {String} Fund type as returned by the API. <br>
     * Possible results: F (For mutual funds), M (For retirement funds) 
     */
    async fetchType() {
        let response = await _tefas_fetch(
            Urls.type_url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify({
                    "fonKodu": this.name
                })
            },
            this.fetchFundType.name
        )

        return response?.["fonTipi"]
    }

    /**
     * Fetches 8 comparisons (ALTIN, BIST100, BIST30, EUR, MEVDUAT FAIZI, SERBEST SEMSIYE FONU, TUFE, USD) 
     * along with the fund return for the given period
     * 
     * @route /api/funds/fonProfilDtyGetir
     * @param {Number} period - Can only be weekly (13), YTD(0), 1 month(1), 3 months(3), 6 months(6), 1 year(12), 3 years(36), 5 years(60) <br>
     * Default to 1 year
     * 
     * @returns {JSON} An array containing 9 elements
     */
    async fetchComparisons(period = Periods.ONE_YEAR) {
        let response = await _tefas_fetch(
            Urls.comparisons_url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify({
                    "fonKodu": this.name,
                    "dil": "TR",
                    "periyod": String(period)
                })
            },
            this.fetchComparisons.name
        )

        return response?.["resultList"]
    }
};