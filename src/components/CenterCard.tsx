import { Icon } from "@iconify/react";
import { FC } from "react";

type CenterCardProps = {
    content: string;
    icon: string;
    title: string;
}

const CenterCard: FC<CenterCardProps> = ({
    content,
    icon,
    title
}) => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-md shadow-2xl p-8 space-y-4">
              <div className="flex items-center justify-center rounded-full text-center bg-gray-300 text-yellow-600 w-10 h-10 text-center text-white">
                      <Icon icon={icon} width={24} height={24} />
                    </div>
            <div className="font-bold text-3xl pt-4 text-neutral-500">{title}</div>
            <div className="text-neutral-500 text-start text-sm md:text-base lg:text-lg max-w-full break-words">{content}</div>
        </div>
    )
}

export default CenterCard