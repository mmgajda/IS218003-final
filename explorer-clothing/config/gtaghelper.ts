// type WindowWithDataLayer = Window & {
//     dataLayer: Record<string, any>[]
// }

// declare const window: WindowWithDataLayer

// // export const GTM_ID = process.env.GOOGLE_ANALYTICS;
// export const GTM_ID = "G-XS3EW9ZRZL";

// export const pageview = (url: string) => {
//     if (typeof window.dataLayer !== "undefined") {
//         window.dataLayer.push({
//             event: "pageview",
//             page: url,
//         })
//     } else {
//         console.log({
//             event: "pageview",
//             page: url,
//         })
//     }
// }

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const ga_id = process.env.GOOGLE_ANALYTICS

export const pageview = (url: string) => {
    if (typeof window.dataLayer !== "undefined") {
        window.dataLayer.push({
            event: "pageview",
            page: url,
        })
    } else {
        console.log({
            event: "pageview",
            page: url,
        })
    }
}