
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client"
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit, reset] = useForm("xkgzqeje");
    if (state.succeeded) {
        return <p>Form Submitted. <br />We will contact you soon - The Captains Cafe <button onClick={reset}>Reset</button></p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <Input
                id="email"
                type="email"
                name="email"
                className="mb-3"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <Textarea
                id="message"
                name="message"
                className="mb-3"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button className='border-2' type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm