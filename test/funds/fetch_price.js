import { test } from "node:test"
import assert from 'node:assert/strict';

import { Tefas } from "tefas-scraper-api";

test("Returns a year's list of data for a valid fund name", async() => {
    var tefas = new Tefas("  zBj ");
    var res = await tefas.funds.fetchPrice(12);

    assert(Object.keys(res).length > 0);
});

