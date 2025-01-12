import { Icon } from "@iconify/react";

const Waxing = () => {
  const priceList = [
    {
      service: "Full Arm",
      price: "N18,000",
    },
    {
      service: "Half Arm",
      price: "N10,000",
    },
    {
      service: "Full Leg",
      price: "N19,000",
    },
    {
      service: "Half Leg [Thigh or Knee down]",
      price: "N12,000",
    },
    {
      service: "Under Arm",
      price: "N8,000",
    },
    {
      service: "Eyebrow",
      price: "N5,000",
    },
    {
      service: "Chest",
      price: "N7,000",
    },
    {
      service: "Tummy",
      price: "N7,000",
    },
    {
      service: "Upper Lip",
      price: "N4,000",
    },
    {
      service: "Nostril",
      price: "N5,000",
    },
    {
      service: "Chin",
      price: "N5,000",
    },
    {
      service: "Inner Thigh",
      price: "N14,000",
    },
    {
      service: "Lower back",
      price: "N7,000",
    },
    {
      service: "Basic Bikini Wax",
      price: "N14,000",
    },
    {
      service: "G-String [Extended]",
      price: "N18,000",
    },
    {
      service: "Hollywood wax [Complete bare]",
      price: "N22,000",
    },
    {
      service: "Brazillian wax",
      price: "N20,000",
    },
  ];

  const browsList = [
    {
      service: 'Microblading',
      price: 'N55,000'
    },
    {
      service: 'Combo',
      price: 'N60,000'
    },    {
      service: 'Microshading',
      price: 'N65,000'
    },    {
      service: 'Hybrid Brow',
      price: 'N65,000'
    },    {
      service: 'Ombre',
      price: 'N70,000'
    },    {
      service: 'Brow lamination',
      price: 'N15,000'
    },    {
      service: 'Tint',
      price: 'N10,000'
    },    {
      service: 'Brow threading',
      price: 'N5,000'
    },    {
      service: 'Brow waxing',
      price: 'N5,000'
    },    {
      service: 'Brow tweezing',
      price: 'N5,000'
    },    {
      service: 'Brow grooming',
      price: 'N2,000'
    },
  ]

  const piercing = [
    {
      service: "Nose",
      price: "N9,500",
    },
    {
      service: "Tragus",
      price: "N9,500",
    },
    {
      service: "Standard lobe",
      price: "N4,500",
    },
    {
      service: "Outer lobe",
      price: "N4,500",
    },
    {
      service: "Upper lobe",
      price: "N4,500",
    },
    {
      service: "Tongue",
      price: "N20,000",
    },
    {
      service: "Medusa",
      price: "N15,000",
    },
    {
      service: "Industry",
      price: "N15,000",
    },
    {
      service: "Inner conch",
      price: "N12,000",
    },
    {
      service: "Belly button",
      price: "N18,000",
    },
    {
      service: "Dimples",
      price: "N18,000",
    },
    {
      service: "Eye brow",
      price: "N10,000",
    },
    {
      service: "Helix",
      price: "N10,000",
    },
    {
      service: "Daith",
      price: "N10,000",
    },
    {
      service: "Smiley",
      price: "N15,000",
    },
    {
      service: "Nipple",
      price: "N30,000",
    },
  ];

  const studiolashes = [
    {
      type: "Classic",
      Nprice: "N17,000",
      Rprice: "N9,000",
    },
    {
      type: "Hybrid",
      Nprice: "N19,000",
      Rprice: "N12,000",
    },
    {
      type: "Volume",
      Nprice: "N24,000",
      Rprice: "N14,000",
    },
    {
      type: "Mega",
      Nprice: "N28,000",
      Rprice: "N16,000",
      Reprice: "N4,000",
      Bprice: "N2,000",
    },
  ];

  const headLashes = [
    {
      type: "Classic",
      Nprice: "N19,000",
      Rprice: "N12,000",
    },
    {
      type: "Hybrid",
      Nprice: "N22,000",
      Rprice: "N14,000",
    },
    {
      type: "Volume",
      Nprice: "N28,000",
      Rprice: "N16,000",
    },
    {
      type: "Mega",
      Nprice: "N32,000",
      Rprice: "N17,000",
    },
  ];

  return (
    <div className="bg-[#fffbeb]">
      <div className="text-center text-5xl pt-5 text-yellow-800 font-extrabold italic">
        Price List
      </div>
      <div className="flex flex-col lg:flex-row h-auto gap-5 p-10">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-[#fffbeb]/30 shadow-2xl backdrop-blur-xl p-10 rounded-lg">
            <span id='waxing' className="text-center text-yellow-800 text-3xl">
              Waxing Price list
            </span>
            <div className="pt-10 px-2">
              {priceList.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center space-y-4 gap-y-2"
                >
                  <span className="font-semibold text-gray-700">
                    {item.service}
                  </span>
                  <span className="text-yellow-800 text-right">
                    {item.price}
                  </span>
                  <hr className="col-span-2 border-t border-gray-300 mt-2" />
                </div>
              ))}
            </div>
            <a
              href={"/"}
              className="text-yellow-800 pt-2  flex items-center justify-end gap-3"
            >
              {"Go back"}
              <Icon icon="weui:arrow-filled" width="12" height="24" />
            </a>
          </div>
          <div id='brows' className="bg-[#fffbeb]/30 shadow-2xl backdrop-blur-xl p-10 rounded-lg">
            <span className="text-center text-yellow-800 text-3xl">
              Brows Price list
            </span>
            <div className="pt-10 px-2">
              {browsList.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center space-y-4 gap-y-2"
                >
                  <span className="font-semibold text-gray-700">
                    {item.service}
                  </span>
                  <span className="text-yellow-800 text-right">
                    {item.price}
                  </span>
                  <hr className="col-span-2 border-t border-gray-300 mt-2" />
                </div>
              ))}
            </div>
            <a
              href={"/"}
              className="text-yellow-800  flex items-center justify-end gap-3"
            >
              {"Go back"}
              <Icon icon="weui:arrow-filled" width="12" height="24" />
            </a>
          </div>
          <div id='lashes' className="bg-[#fffbeb]/30 shadow-2xl backdrop-blur-xl p-10 rounded-lg">
            <span className="flex justify-center items-center text-yellow-800 text-3xl">
              Studio Artist Price list
            </span>
            <div>
              {studiolashes.map((item, index) => (
                <div
                  key={index}
                  className="space-y-4 pt-6 border-b border-gray-300 pb-4 mb-4"
                >
                  <div className="text-yellow-800 italic font-semibold text-2xl text-center">
                    {item.type}
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="font-semibold text-gray-700">
                      New: {item.Nprice}
                    </div>
                    <div className="text-yellow-800">Refill: {item.Rprice}</div>
                  </div>
                </div>
              ))}
              <div className="space-y-2 text-center">
                <div className="font-semibold text-gray-700">
                  Removal: N4,000
                </div>
                <div className="font-semibold text-gray-700">
                  Brow grooming: N2,000
                </div>
                <hr className="border-gray-300 mt-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
        <div className="bg-[#fffbeb]/30 shadow-2xl backdrop-blur-xl p-10 rounded-lg">
            <span className="flex justify-center items-center text-yellow-800 text-3xl">
              Head Artist Price list
            </span>
            <div>
              {headLashes.map((item, index) => (
                <div
                  key={index}
                  className="space-y-4 pt-6 border-b border-gray-300 pb-4 mb-4"
                >
                  <div className="text-yellow-800 italic font-semibold text-2xl text-center">
                    {item.type}
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="font-semibold text-gray-700">
                      New: {item.Nprice}
                    </div>
                    <div className="text-yellow-800">Refill: {item.Rprice}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={"/"}
              className="text-yellow-800  flex items-center justify-end gap-3"
            >
              {"Go back"}
              <Icon icon="weui:arrow-filled" width="12" height="24" />
            </a>
          </div>
          <div id='pierce' className="bg-[#fffbeb]/30 shadow-2xl backdrop-blur-xl p-10 rounded-lg">
            <span className="text-center text-yellow-800 text-3xl">
              Piercing Price list
            </span>
            <div className="pt-10 px-2">
              {piercing.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center space-y-4 gap-y-2"
                >
                  <span className="font-semibold text-gray-700">
                    {item.service}
                  </span>
                  <span className="text-yellow-800 text-right">
                    {item.price}
                  </span>
                  <hr className="col-span-2 border-t border-gray-300 mt-2" />
                </div>
              ))}
            </div>
            <a
              href={"/"}
              className="text-yellow-800  flex items-center justify-end gap-3"
            >
              {"Go back"}
              <Icon icon="weui:arrow-filled" width="12" height="24" />
            </a>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Waxing;
