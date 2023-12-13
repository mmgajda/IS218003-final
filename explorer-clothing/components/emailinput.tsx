'use client';

import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

const MailchimpForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/subscribe", {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Debugging: Log the raw text response
            const textResponse = await response.text();
            console.log(textResponse);

            // Try parsing the text response as JSON
            const data = await response.json();

            if (response.ok) {
                setEmail('');
                alert('Subscribed successfully!');
            } else {
                throw new Error(data.error || 'An error occurred');
            }
        } catch (error: any) {
            alert('Subscription failed: ' + error.message);
        }
    };

    return (
        <div id="subscribe-form" className='flex flex-col items-center my-10'>
            <p>Be the First to Know About the Latest Releases</p>
        <form onSubmit={handleSubmit} className="flex items-center">
            <Input
            style={{ backgroundColor: "#d3d3d3"}}
                isClearable
                variant='bordered'
                type='email'
                label='Email'
                fullWidth
                color="primary"
                size="lg"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClear={() => setEmail("")}
            />
            <Button type="submit" color="primary" size="lg" className="ml-2">
                Subscribe
            </Button>
        </form>
        </div>
    );
};

export default MailchimpForm;
