import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { getDocs, collection, orderBy } from "firebase/firestore";
import { db } from "../Firebase";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function State() {
  const { state } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getDocs(collection(db, "VendorLive"), orderBy("Location")).then(
        (querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            .filter(
              (item) => item.Location?.toLowerCase() === state.toLowerCase()
            );
          setData(newData);
        }
      );
    };
    fetchData();
  }, [state]);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="grid gap-8 m-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <div className="p-4 bg-white border-[1px] border-slate-300">
                <img src={_.Path} alt="" />
                <div className="pl-3 space-y-3 my-1.5">
                  <h1 className="text-xl font-bold">{_.Name}</h1>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <LocationOnIcon fontSize="small" />
                      <p>{_.Location}</p>
                    </div>
                    <div className="py-1.5 text-md">
                      <p>{"Starting Price: negotiable"}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon fontSize="small" />
                      <p className="text-sm font-semibold ">{_.Phone}</p>
                    </div>
                    <div className="flex justify-end"></div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
