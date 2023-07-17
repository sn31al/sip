import { collection } from "firebase/firestore";
import React from "react";
import { db } from "../Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
export default function Admin() {
  const docref = collection(db, "VendorLive");
  const [docs, loading, error] = useCollectionData(docref);
  console.log(loading);
  console.log(docs);
  console.log(error);

  const Headers = [
    {
      Heading: "S.No",
    },
    {
      Heading: "Name",
    },
    {
      Heading: "Field",
    },
    {
      Heading: "Phone Number",
    },
    {
      Heading: "Location",
    },
    {
      Heading: "Verified",
    },
  ];

  return (
    <div className="bg-[#87cefa] w-screen h-screen p-3.5 hidden md:block">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg ">
        {/* Headings */}
        <div className="flex items-center justify-start space-x-7">
          {Headers.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className=" text-center text-white px-5 py-2.5 rounded-2xl bg-black">
                  <h1>{_.Heading}</h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          {docs?.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex items-center my-8 space-x-7">
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl">
                    {index + 1}
                  </div>
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl ">
                    {_.Name}
                  </div>
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl ">
                    {_.Field}
                  </div>
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl ">
                    {_.Phone}
                  </div>
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl ">
                    {_.Location}
                  </div>
                  <div className=" bg-[#f9f9f9] border-[1px] border-slate-200 text-center text-black px-5 py-2.5 rounded-2xl ">
                    {_.Verified}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
