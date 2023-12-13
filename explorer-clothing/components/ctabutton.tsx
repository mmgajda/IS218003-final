'use client';
import { Button } from '@nextui-org/react';

interface ButtonComponentProps {
    scrollToForm: () => void;
}

const CTAButton = ({ scrollToForm }: { scrollToForm: () => void }) => {
    return (
        <Button onClick={scrollToForm} color="primary">
            Be the First to Explore
        </Button>
    );
};

export default CTAButton;