// Endpoints
import { TefasFunds } from "./endpoints/funds.js";
import { TefasStatistics } from "./endpoints/statistics.js";

/** @class */
export class Tefas {
    // ~~~ Static Endpoints ~~~
    /**
     * Static API point for statistics
     * @memberof Tefas
     * @type {TefasStatistics}
     * @static
     */
    static statistics = TefasStatistics;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~

    /**
     * Initializes the wrapper for the specified fund name
     * @constructor
     * @param {string} name Fund Name (Can be upper or lower case)
     */
    constructor(name) {
        if(!name) {
            throw new Error("TEFAS API Error: Argument 'name' cannot be empty!");
        }

        name = name.trim()
        this.name = name.toUpperCase();

        // ~~~ Member Endpoints ~~~
        /**
         * API point for funds
         * @memberof Tefas
         * @type  {TefasFunds}
         */
        this.funds = new TefasFunds(this);

        // ~~~~~~~~~~~~~~~~~~~~~~~~~
    }
}

