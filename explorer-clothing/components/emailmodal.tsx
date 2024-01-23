import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import MailchimpForm from './emailinput';
import CTAButton from './ctabutton';

interface EmailModalProps {
    visible: boolean;
    onClose: () => void;
}

// const EmailModal: React.FC<EmailModalProps> = ({ visible, onClose }) => {
//     const handleFormSubmit = (email: string) => {
//         console.log('Email Submitted:', email);
//         onClose();
//     };

//     if (!visible) {
//         return null;
//     }

//     return (
//         <Modal closeButton onClose={onClose}>
//             <ModalHeader>
//                 <ModalContent id="modal-title">
//                     <p>Subscribe to Our Newsletter</p>
//                 </ModalContent>
//             </ModalHeader>
//             <ModalBody>
//                 <MailchimpForm />
//             </ModalBody>
//         </Modal>
//     );
// };

export function EmailModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <CTAButton onClick={onOpen}></CTAButton>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Our Newsletter</ModalHeader>
                            <ModalBody>
                                <p>
                                    Subscribe to our newsletter for the latest sales, promotions, and updates.
                                </p>
                                <MailchimpForm />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


export default EmailModal;