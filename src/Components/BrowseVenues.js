import React from "react";
import { Link } from "react-router-dom";

export default function BrowseVenues() {
  const Data = [
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/ahemdabad.jpg",
      Name: "Ahemdabad",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/agra.jpg",
      Name: "Agra",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/shimla.jpg",
      Name: "Shimla",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/nagpur.jpg",
      Name: "Nagpur",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/meerut-new.jpg",
      Name: "Meerut",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/nashik.jpg",
      Name: "Nashik",
    },
    {
      image:
        "https://cdn.venuelook.com/images/new-home-images/optimized/city/nashik.jpg",
      Name: "Nashik",
    },
  ];

  return (
    <div className="my-32">
      <div className="text-3xl font-semibold text-center lg:text-3xl">
        <h1>Browse Some Venus</h1>
      </div>
      <div className="flex w-[85vw] mx-auto space-x-8 overflow-x-scroll scroll-smooth my-14">
        {Data.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`/${_.Name}`}>
                <div className="text-center shadow-slate-50 cursor-pointer shadow-lg border-[1px] ">
                  <img src={_.image} className="max-w-md" alt="pao" />
                  <h1 className="p-4 text-lg">{_.Name}</h1>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
