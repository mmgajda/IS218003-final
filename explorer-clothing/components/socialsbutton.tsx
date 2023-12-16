'use client';
import { Button } from '@nextui-org/react';

interface ButtonComponentProps {
    scrollToForm: () => void;
}

const SocialsButton = ({ scrollToForm }: { scrollToForm: () => void }) => {
    return (
        <Button onClick= { scrollToForm } color = "primary" >
            Share your Explorer Experience
                </Button>
    );
};

export default SocialsButton;