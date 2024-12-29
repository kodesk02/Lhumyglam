import SideCard from "@/components/SideCard";

const Services = () => {
  return (
    <div>
      <div className="pt-10 text-gray-500 font-bold italic tracking-wider text-3xl flex text-center items-center justify-center">
        Lhumy Glam Services
      </div>
      <div className="text-gray-500 text-center md:pb-4 md:pt-4 p-5 md:p-72 flex items-center justify-center">
        We specialize in luxurious waxing, flawless lash enhancements, and
        precise piercing services that elevate your beauty. We focus on
        providing high-quality results with attention to detail and care.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-16">
        <SideCard
          content={"Achieve silky smooth skin with our expert waxing services tailored for all skin types."}
          label={"price list"}
          icon={"mdi:cloth-outline"}
          title={"Waxing"}
          link={"/prices/waxing"}
        />
        <SideCard
          content={"Enhance your style with our professional piercing services, tailored to your individuality."}
          label={"price list"}
          icon={"lucide:dot"}
          title={"Piercing"}
          link={"/prices/waxing"}
        />

        <SideCard
          content={"Enhance your natural beauty with our expertly applied lash extensions, tailoreed to suit your style. "}
          label={"price list"}
          icon={"game-icons:eyelashes"}
          title={"Lashes"}
          link={"/prices/waxing"}
        />
      </div>
    </div>
  );
};

export default Services;
