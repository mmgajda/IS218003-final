// import Script from "next/script";
// import { pageview, GTM_ID } from '@/config/gtaghelper';

// const GoogleAnalytics = ({ GTM_ID }: { GTM_ID: string }) => (
//     <>
//         <Script
//             async
//             src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
//         ></Script>
//         <Script
//             id="google-analytics"
//             dangerouslySetInnerHTML={{
//                 __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
            
//             gtag('consent', 'default', {
//             'analytics_storage': 'denied'
//             });
            
//             gtag('config', '${GTM_ID}');
//         `,
//             }}
//         ></Script>
//     </>
// );
// export default GoogleAnalytics;

import Script from "next/script";
import { pageview, ga_id } from '@/config/gtaghelper';

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
    <>
        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-XS3EW9ZRZL`}
        ></Script>
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${ga_id}');
        `,
            }}
        ></Script>
    </>
);
export default GoogleAnalytics;