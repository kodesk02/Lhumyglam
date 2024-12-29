import { FC } from "react";
import { Icon } from "@iconify/react";

type SideCardProps = {
  content: string;
  label: string;
  icon: string;
  title: string;
  link: string;
};

const SideCard: FC<SideCardProps> = ({ content, label, icon, title, link }) => {
  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-md shadow-2xl p-8 space-y-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-3xl pt-4 text-neutral-500">{title}</div>

        <div className="flex items-center justify-center rounded-full text-center bg-gray-300 text-yellow-600 w-10 h-10 text-center text-white">
          <Icon icon={icon} width={24} height={24} />
        </div>
      </div>

      <div className="text-neutral-500 text-start text-sm md:text-base lg:text-lg max-w-full break-words">{content}</div>
      <div className="flex justify-end items-center">
        <a
          href={link}
          className="bg-transparent text-yellow-600 hover:text-white w-[150px] border-2 border-yellow-600 hover:bg-yellow-600 flex items-center justify-between gap-4 p-2 rounded-md"
        >
          {label}
          <Icon icon="weui:arrow-filled" width="12" height="24" />
        </a>
      </div>
    </div>
  );
};

export default SideCard;
