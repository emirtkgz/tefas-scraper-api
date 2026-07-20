/* 
 * API only accepts these periods
 * 13 -> 1 Week
 * 0  -> Year to Date
 * Rest of the numbers are period of months (eg. 60 is 5 years)
*/ 
export const Periods = Object.freeze({
    ONE_WEEK:     13, 
    ONE_MONTH:    1, 
    THREE_MONTHS: 3, 
    SIX_MONTHS:   6, 
    YTD:          0, 
    ONE_YEAR:     12, 
    THREE_YEARS:  36, 
    FIVE_YEARS:   60
})
