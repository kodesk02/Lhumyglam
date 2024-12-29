'use client'

import { Icon } from "@iconify/react";
import { FC } from "react";

type CallButtonProps = {
    label: string;
    phoneNumber: string;
}

const CallButton: FC<CallButtonProps> = ({
    label,
    phoneNumber,
}) => {

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    return (
        <button onClick={handleClick} className="flex gap-4 font-bold bg-yellow-800 p-3 rounded-md ">
            {label}
            <Icon icon="ic:baseline-phone" width="24" height="24" />
        </button>
    )
}

export default CallButton