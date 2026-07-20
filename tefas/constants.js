export const Urls = {
    base_url: "https://www.tefas.gov.tr",

    price_url: "/api/funds/fonFiyatBilgiGetir",
    type_url:  "/api/funds/fonTipiGetir",
    comparisons_url: "/api/funds/fonProfilDtyGetir",
    fund_list_url: "/api/statistics/tefas/getFplFonList",
    forex_list_url: "/api/statistics/tefas/getFplDovizList/v2"
}

export const header = new Headers({
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:152.0) Gecko/20100101 Firefox/152.0",
    "Accept": "*/*",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Encoding": "gzip, deflate, br, zstd"
})