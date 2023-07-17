import React from "react";

export default function HowItWorks() {
  const Data = [
    {
      image: "https://cdn.venuelook.com/images/new-home-images/search.png",
      Tittle: "Browse Vendors",
      Para: "Check out the best suited Vendors, compare them with other vendors and books them.      ",
    },
    {
      image: "https://cdn.venuelook.com/images/new-home-images/rupee.png",
      Tittle: "Book Vendors",
      Para: "Check out the best suited Vendors contact them and book them for the event with ease.      ",
    },
    {
      image: "https://cdn.venuelook.com/images/new-home-images/calender.png",
      Tittle: "Confirm Vendor",
      Para: "Check the Vendor, has any special offers and function packages and confirm and book them.      ",
    },
  ];

  return (
    <div className="my-16">
      <div className="text-2xl font-semibold text-center lg:text-3xl">
        <h1>How it Works?</h1>
      </div>
      <div className="flex flex-col items-center justify-center px-5 my-10 space-y-8 md:space-x-6 md:space-y-0 md:flex-row">
        {Data.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <div className="max-w-sm p-5 hover:scale-105 ease-in-out duration-300 space-y-4 text-center shadow-lg border-[1px] shadow-slate-50 cursor-pointer">
                <img src={_.image} alt="oi" className="w-20 mx-auto" />
                <h1 className="text-xl font-bold">{_.Tittle}</h1>
                <p>{_.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
