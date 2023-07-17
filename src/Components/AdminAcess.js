import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAcess() {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      user.Email === "mylenovo8550@gmail.com" &&
      user.Password === "lenovo855"
    ) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <section className="flex justify-center my-28">
        <form className="px-10 bg-white max-w-md p-5  border-[1px] shadow-md border-slate-200 my-4 md:my-0">
          <div className="mb-8 text-center space-y-2.5 font-semibold text-[#434e53]">
            <h1 className="text-2xl md:text-3xl">Welcome Admin</h1>
          </div>
          <div className="flex flex-col my-4 space-y-1">
            <label className="text-slate-500" htmlFor="Address">
              Email
            </label>
            <input
              value={user.Email}
              // onClick={Getlocation}
              onChange={(e) => {
                setUser({ ...user, Email: e.target.value });
              }}
              id="Address"
              className="border-b-[1px] outline-none border-slate-300 px-16 py-2.5"
              type="text"
            />
          </div>
          <div className="flex flex-col my-4 space-y-1">
            <label className="text-slate-500" htmlFor="Address">
              Password
            </label>
            <input
              value={user.Password}
              onChange={(e) => {
                setUser({ ...user, Password: e.target.value });
              }}
              id="Address"
              className="border-b-[1px] outline-none border-slate-300 px-16 py-2.5"
              type="password"
            />
          </div>
          <div className="flex flex-col my-5 space-y-5">
            <button
              className="border-b-[1px] bg-black text-white font-semibold border-slate-100 px-8 py-3.5"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="max-w-xs text-xs leading-5 text-center">
              By Continuing you will age agreed to all the Rights
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
