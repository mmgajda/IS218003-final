import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextRequest, NextResponse } from 'next/server';

mailchimp.setConfig({
    apiKey: "2f686ad1b4c5d33ee8d7ca407688b259-us21",
    server: "us21",
});

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') {
        // return new NextResponse(JSON.stringify({ error: 'Method not allowed' }), {
        //     status: 405,
        // });
    }

    const { email } = await request.json();
    console.log('Request from' + email + 'received in /api/subscribe');

    // const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    // || !emailRegex.test(`{email}`
    if (!email) {
        console.log('Invalid email address');
        // return new NextResponse(JSON.stringify({ error: "Email is required and should be valid." }), {
        //     status: 400,
        // })
    } else {
        console.log('Valid email address');
    }

    try {
        const res = await mailchimp.lists.addListMember("af8e239fcd",
            {
                email_address: email,
                status: 'subscribed'
            });
        console.log("Subscriber success");

        return new NextResponse(JSON.stringify({ res }), {
            status: 200,
        })
    } catch (error: any) {
        console.error('Mailchimp API error: ', error);
        // return new NextResponse(JSON.stringify({ error: JSON.parse(error.response.text) }), {
        //     status: 500,
        // });
    }
};