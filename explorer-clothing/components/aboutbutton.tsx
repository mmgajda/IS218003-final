'use client';
import { Button } from '@nextui-org/react';

interface ButtonComponentProps {
    scrollToForm: () => void;
}

const AboutButton = ({ scrollToForm }: { scrollToForm: () => void }) => {
    return (
        <Button onClick={scrollToForm} color="primary">
            Learn More about Explorer
        </Button>
    );
};

export default AboutButton;