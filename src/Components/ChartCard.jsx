import React from "react";

const data = [
  {
    headline: "New clients",
    number: "54",
    per: "+ 18.7%",
  },
  {
    headline: "Invoices Overdue",
    number: "6",
    per: "- 2.9%",
  },
];

const ChartCard = () => {
  return (
    <div className="space-y-5">
      {data.map((_, index) => {
        return (
          <div
            className="p-6 rounded-2xl shadow-lg shadow-slate-200  w-[60vw] lg:w-[20vw] sm:w-[40vw] space-y-5"
            key={index}
          >
            <p className="font-semibold text-[#676767] text-xl">{_.headline}</p>
            <div className="flex items-center justify-around pt-2">
              <p className="font-semibold text-blue-600 text-3xl ">
                {_.number}
              </p>
              <p className={`bg-${_.color}  rounded-md px-2.5 py-0.5 text-sm`}>
                {_.per}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartCard;
