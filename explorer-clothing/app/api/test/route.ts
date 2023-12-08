// import type { NextApiRequest, NextApiResponse } from 'next';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     return res.status(200).json({ message: 'Route is reachable' })
//     return res.status(400).json({ message: 'Route is not reachable' });
// };
require('dotenv').config({ path: './.env.local' });
const mailchimp = require('@mailchimp/mailchimp_marketing');

console.log('server region', process.env.MAILCHIMP_API_SERVER);
mailchimp.setConfig({
    apiKey: "1323cd5d9b8f1bc155164abc3ccf38d3-us21",
    server: "us21",
});
console.log('server region', process.env.MAILCHIMP_API_SERVER);

async function run() {
    console.log('server region', process.env.MAILCHIMP_API_SERVER);
    const response = await mailchimp.ping.get();
    console.log(response);


}

run();


// export async function POST(req) {
//     try {

//         return NextResponse.json({
//             status: 200,
//         });
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Failed to get admins" },
//             {
//                 status: 500,
//             }
//         );
//     }
// }