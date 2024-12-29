'use client'

import { Icon } from "@iconify/react";
import { FC } from "react";

type ChatButtonProps = {
    label: string;
    whatsappNumber: string;
}

const ChatButton: FC<ChatButtonProps> = ({
    label,
    whatsappNumber,
}) => {

    const handleClick = () => {
        const message = encodeURIComponent('Hello, I would like to book an appointment')
        const url = `https://wa.me/${whatsappNumber}?text=${message}`
        window.open(url, '_blank')
    }

    return (
        <div onClick={handleClick} className="flex gap-4 font-bold bg-neutral-700 p-3 rounded-md">
            {label}
            <Icon icon="ic:outline-whatsapp" width="24" height="24" />
        </div>
    )
}

export default ChatButton