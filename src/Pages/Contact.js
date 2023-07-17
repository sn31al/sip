import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  const [Userdetails, setUserdetails] = useState({
    Name: "",
    Email: "",
    interest: "",
    Contact: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (Userdetails.Name && Userdetails.Email && Userdetails.interest !== "") {
      await addDoc(collection(db, "SPONSERS"), Userdetails);
      alert("Will React Out Soon");
      navigate("/");
    } else {
      alert("Please fill");
    }
  };

  return (
    <div className="flex flex-col items-center justify-around py-10 md:flex-row gap-y-10">
      <div className="space-y-3.5 max-w-sm">
        <h1 className="text-lg font-semibold md:text-3xl">Contact Us</h1>
        <p className="leading-8 ">
          Address : CMR College of Engineering & Technology, Kandlakoya ,
          Medchal Road, Seethariguda, Hyderabad, TS- 501 401. Telangana. INDIA.
          Phone : 9248727210 Email : info@cmrcet.ac.in Website : cmrcet.ac.in
        </p>
      </div>
      <form className="flex flex-col justify-center px-5 py-5 pb-3 space-y-14">
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={Userdetails.Name}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, Name: e.target.value });
            }}
            id="name"
            className="border-[1px] max-w-[90vw]  md:max-w-[40vw] p-2 border-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            value={Userdetails.Email}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, Email: e.target.value });
            }}
            id="Email"
            className="border-[1px]  px-20 py-3   border-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="Your interest">Category</label>
          <select
            name=""
            id=""
            className="border-[1px] my-3.5  max-w-[90vw] p-2 md:max-w-[40vw]  border-slate-200 outline-none"
            value={Userdetails.interest}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, interest: e.target.value });
            }}

          >
            <option value="">Snackking Partner</option>
            <option value="">Media Partner</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2.5">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            value={Userdetails.Contact}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, Contact: e.target.value });
            }}
            id="name"
            className="border-[1px] max-w-[90vw]  md:max-w-[40vw] p-2 border-slate-200 outline-none"
          />
        </div>
        <button
          className="border-b-[1px] bg-black text-white font-semibold border-slate-100 px-8 py-3.5"
          onClick={SubmitForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
