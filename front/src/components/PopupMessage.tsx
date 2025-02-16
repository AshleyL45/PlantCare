import React, {useEffect} from 'react';
import './popupMessage.css';

interface PopupMessageProps {
    message: string;
    duration?: number;
    onClose: () => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({message, duration = 2000, onClose}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className = "popup-message" >
            {message}
        </div>
    );
};

export default PopupMessage;
