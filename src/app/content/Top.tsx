import CallButton from "@/components/CallButton";
import ChatButton from "@/components/ChatButton";

const TopPic = () => {
  return (
    <div className="bg-top-pic relative h-[540px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex items-center justify-center text-gray-600 font-extrabold italic text-3xl tracking-wider">
        Lhumy
      </div>
      <div className="relative z-10 text-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center p-10 h-[400px] text-start">
        <div>
          <div className="text-5xl text-gray-300 italic font-bold tracking-widest">
            Lhumy Glam
          </div>
          <div className="pt-10 space-y-2 font-thin text-gray-100">
            At Lhumy Glam, we specialize in enhancing your beauty with premium
            services. 
            Our expert team offers luxurious waxing, flawless lash
            enhancements, and precise piercing services,
            all designed to elevate
            your look. With the focus on precision, trend-forward techniques,
            and a commitment to quality, 
            Lhumy Glam is your destination for a
            refined beauty experience.
            
            <div className="pt-6 flex gap-5">
              <CallButton label={"Schedule now"} phoneNumber={"+2348127636127"} />
              <ChatButton label={"Schedule now on whatsapp"} whatsappNumber={"+2348127636127"}/>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopPic;
