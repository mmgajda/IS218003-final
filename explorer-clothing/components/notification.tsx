import React from 'react';

type NotificationProps = {
    message: string;
    type: string;
};

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    if (!message) return null;

    return (
        <div className={`notification ${type}`} data-testid={`notification-${type}`}>
            {message}
        </div>
    );
};

export default Notification;
