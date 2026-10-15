import { test } from "node:test"
import assert from 'node:assert/strict';

import { Tefas } from "tefas-scraper-api";

test("Fetches the all funds available on TEFAS", async() => {
    var res = await Tefas.statistics.fetchFundList();

    assert(Object.keys(res).length > 0);
});

