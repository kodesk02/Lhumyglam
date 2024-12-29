import CenterCard from "@/components/CenterCard";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="pt-10 text-gray-500 font-bold italic tracking-wider text-3xl flex text-center items-center justify-center">
          Reach out to us
        </div>
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="flex items-center justify-center rounded-full text-center text-gray-300 bg-yellow-600 w-10 h-10 text-center text-white">
            <a href="https://www.facebook.com/share/18VryTz8rq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Icon icon="ic:baseline-facebook" width="24" height="24" />
            </a>
          </div>{" "}
          <div className="flex items-center justify-center rounded-full text-center text-gray-300 bg-yellow-600 w-10 h-10 text-center text-white">
            <a href="https://www.instagram.com/lhumyglam?igsh=MTNydGZ3anBkY3N0NQ==" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
          </div>{" "}
          <div className="flex items-center justify-center rounded-full text-center text-gray-300 bg-yellow-600 w-10 h-10 text-center text-white">
            <a
              href="https://wa.me/+2348127636127?text=${'Hello, I would like to book an appointment'}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
            </a>
          </div>{" "}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-16">
        <CenterCard content={"Faithjoel980@gmail.com"} icon={"mdi:email-outline"} title={"Email"} />
        <CenterCard
          content={"08127636127"}
          icon={"material-symbols-light:call-outline-sharp"}
          title={"Contact us"}
        />
        <CenterCard
          content={"19 oseni close off modupe johnson.. opposite access bank adeniran ogunsanya Suru Lere, Lagos, Nigeria"}
          icon={"mingcute:location-fill"}
          title={"Location"}
        />
      </div>
    </div>
  );
};

export default Contact;
