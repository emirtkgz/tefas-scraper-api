import { Tefas } from "tefas-scraper-api";

var tefas = new Tefas("ZBJ");
var res = await tefas.fetchPrice(12);

console.log(res);