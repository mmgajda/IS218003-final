'use client';

import { FormEvent, useRef, useState } from 'react';
import { Input, Button } from '@nextui-org/react';

function MailchimpForm() {
    const [input, setInput] = useState("");
    const [active, setActive] =  useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = input;
        const button = buttonRef.current;

        if(!email || !button) return;
        if(!active) {
            setActive(true);
        }

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
            // console.log(textResponse);

            // Try parsing the text response as JSON
            const data = await response.json();

            if (response.ok) {
                setInput('');
                alert('Subscribed successfully!');
            } else {
                throw new Error(data.error || 'An error occurred');
            }
        } catch (error: any) {
            // alert('Subscription failed: ' + error.message);
        }
    };

    return (
        <div id="subscribe-form" className='flex flex-col md:w-[400px] items-center my-10'>
            <p>Be the First to Know About the Latest Releases</p>
        <form onSubmit={handleSubmit} className="flex items-center animate-fade-in-3">
            <Input
            style={{ backgroundColor: "#d3d3d3"}}
                isClearable
                required
                variant='bordered'
                type='email'
                label='Email'
                fullWidth
                color="primary"
                size="lg"
                placeholder="Your email"
                value={ input }
                onChange={(e) => setInput(e.target.value)}
                onClear={() => setInput("")}
            />
            <Button ref={buttonRef} type="submit" color="primary" size="lg" className="ml-2">
                Subscribe
            </Button>
        </form>
        </div>
    );
};

export default MailchimpForm;
