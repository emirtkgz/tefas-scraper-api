import { Tefas } from "../tefas/index.js";

var tefas = new Tefas("TLY")
console.log(await tefas.fetchPrice(12))