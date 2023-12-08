import type { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: "1323cd5d9b8f1bc155164abc3ccf38d3-us21",
    server: "us21",
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body;
    console.log('Request received in /api/subscribe');

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Email is required and should be valid.' });
    }

    try {
        await mailchimp.lists.addListMember("af8e239fcd", {
            email_address: email,
            status: 'subscribed',
        });
        console.log("subscriber success");
        return res.status(200).json({ message: 'Success! You are now subscribed.' });
    } catch (error: any) {
        console.error('Mailchimp API error: ', error);
        return res.status(500).json({ error: error.message || 'Something went wrong' });
    }
};

