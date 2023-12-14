// export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
//     window.gtag("config", GA_MEASUREMENT_ID, {
//         page_path: url,
//     });
// };

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

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