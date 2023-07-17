import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WalletIcon from "@mui/icons-material/Wallet";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import PaymentIcon from "@mui/icons-material/Payment";

const Data = [
  {
    icon: <WalletIcon />,
    price: "140,20",
    line: "Total Views",
  },
  {
    icon: <DataSaverOffIcon />,
    price: "15",
    line: "Reviews",
  },
  {
    icon: <PaymentIcon />,
    price: "80",
    line: "Total Events",
  },
  {
    icon: <PaymentIcon />,
    price: "3.9",
    line: "Average Rating",
  },
];

const DashboardCard = () => {
  return (
    <div className="grid justify-center grid-cols-2 gap-5 my-10 space-y-6 lg:grid-cols-4 place-items-center md:space-y-4 lg:space-y-0">
      {Data.map((_, index) => {
        return (
          <div
            key={index}
            className="shadow-lg shadow-slate-200 rounded-2xl p-5 space-y-6 w-[40vw] lg:w-[20vw] sm:w-[40vw] h-auto "
          >
            <div className="flex justify-between">
              {_.icon}
              <MoreVertIcon />
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold text-blue-500">{_.price}</p>
              <p className="text-[#676767] text-sm ">{_.line}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;
