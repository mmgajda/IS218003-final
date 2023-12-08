import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body;
    console.log('Request received in /api/subscribe');

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Email is required and should be valid.' });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed',
        });
        return res.status(200).json({ message: 'Success! You are now subscribed.' });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ error: error.message || 'Something went wrong' });
    }
};