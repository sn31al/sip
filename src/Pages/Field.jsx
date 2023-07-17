import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { getDocs, collection, orderBy } from "firebase/firestore";
import { db } from "../Firebase";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TiTickOutline } from "react-icons/ti";

export default function Field() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getDocs(collection(db, "VendorLive"), orderBy("id")).then(
        (querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            .filter((item) => item.Field === id);
          setData(newData);
        }
      );
    };
    fetchData();
  }, [id]);

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="grid gap-8 m-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={_.PdfLink}>
                <div className="p-4 bg-white border-[1px] border-slate-300">
                  <img src={_.Paths} alt={_.Paths} />
                  <div className="pl-3 space-y-3 my-1.5">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-bold">{_.Name}</h1>
                      <div className="flex items-center space-x-2.5">
                        <p className="font-semibold text-green-500">Verified</p>
                        <TiTickOutline size={30} color="green" />
                      </div>
                    </div>
                    <div className="py-1.5 text-md space-y-1.5">
                      <p className="text-sm">{"Starting Price: 300Rs"}</p>
                      <p className="text-sm font-semibold text-blue-500">
                        {"Negotiable"}
                      </p>
                    </div>
                    <div>⭐ ⭐ ⭐</div>
                    <p className="text-xs font-semibold text-blue-500">
                      {"3 / 5"}
                    </p>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <LocationOnIcon fontSize="small" />
                        <p className="text-sm">{"Hyderabad Telengana"}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <PhoneIcon fontSize="small" />
                        <p className="text-sm font-semibold ">{_.Phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
