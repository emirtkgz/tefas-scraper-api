import { header, Urls } from "./constants.js";

// A handy fetch function to deal with errors
export async function _tefas_fetch(rel_url, init, func_name) {
    // Send HTTPS request to API
    let response = await fetch(`${Urls.base_url}${rel_url}`, init)

    // Check for HTTPS errors
    if(!response.ok) {
        throw new Error(`TEFAS API Error: HTTPS request for ${func_name} failed with status code ${response.status}!`)
    }

    let json_res = await response.json()
    // Check if json body is null or empty
    if(!json_res || Object.keys(json_res).length === 0) {
        throw new Error(`TEFAS API Error: API responded with empty body on ${func_name}!`)
    }
    // Check for API errors
    if(json_res?.["errorCode"] != null || json_res?.["errorMessage"] != null) {
        console.log(json_res)
        throw new Error(`TEFAS API Error: API returned error ${json_res?.["errorCode"]} on ${func_name}! Error message: ${json_res?.["errorMessage"]}`)
    }

    return json_res
}