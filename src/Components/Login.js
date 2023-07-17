import React, { useId, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const UserJwt = useId();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.values(user).every((i) => i !== "")) {
        await setDoc(doc(db, "Users", UserJwt), user);
        localStorage.setItem("UserJwt", UserJwt);
        localStorage.setItem("UserName", user.Name);
        navigate(`/dashboard`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-y-scroll bg-black bg-opacity-75 scroll-smooth">
      <section className="flex justify-center">
        <form className="px-10 bg-white max-w-md p-5 rounded-lg border-[1px] shadow-md border-slate-200 my-4 md:my-0">
          {/* <div className="flex justify-end ">
            <RxCross2
              size={30}
              color="grey"
              cursor={"pointer"}
              onClick={() => {
                setlogin(false);
              }}
            />
          </div> */}
          <div className="mb-8 text-center space-y-2.5 font-semibold text-[#434e53]">
            <h1 className="text-2xl md:text-3xl">Welcome</h1>
          </div>
          <div className="flex flex-col my-3 space-y-1">
            <label className="text-slate-500" htmlFor="Name">
              Name
            </label>
            <input
              value={user.Name}
              onChange={(e) => {
                setUser({ ...user, Name: e.target.value });
              }}
              id="Name"
              className="border-b-[1px] outline-none border-slate-300 px-16  py-2.5"
              type="text"
            />
          </div>
          <>
            {/* {user.Role === "Vendor" && (
              <div className="cursor-pointer ">
                <p className="mb-5 text-sm text-center">Upload Certificate</p>
                <FiUploadCloud
                  onClick={() => {
                    inputref.current.click();
                  }}
                  size={65}
                  color="grey"
                  className={` ${
                    blobimg.image !== null ? "hidden" : null
                  }  mx-auto`}
                />
                <input
                  type="file"
                  placeholder="Image"
                  required
                  onChange={handleImageUpload}
                  hidden
                  ref={inputref}
                />
                {blobimg.image !== null ? (
                  <img
                    src={blobimg}
                    className={` ${
                      blobimg ? "block" : "hidden"
                    }  max-w-[40vw] sm:max-w-[17vw] mx-auto`}
                    alt=""
                  />
                ) : null}
              </div>
            )} */}
          </>
          {/* <div className="flex flex-col my-3 space-y-6">
            <label className="text-slate-500" htmlFor="Name">
              Role
            </label>
            <select
              value={user.Role}
              onChange={(e) => {
                setUser({ ...user, Role: e.target.value });
              }}
              className="p-2 outline-none bg-slate-200"
            >
              <option value=""></option>
              <option value="User">User</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div> */}
          {/* <div className="flex flex-col my-6 space-y-1">
            <label className="text-slate-500" htmlFor="Age">
              Age
            </label>
            <input
              value={user.Age}
              onChange={(e) => {
                setUser({ ...user, Age: e.target.value });
              }}
              id="age"
              className="border-b-[1px] outline-none border-slate-300 px-16 py-2.5"
              type="text"
            />
          </div> */}
          {/* <div className="flex flex-col my-4 space-y-1">
            <label className="text-slate-500" htmlFor="Phone">
              Phone Number
            </label>
            <input
              value={user.Phone}
              onChange={(e) => {
                setUser({ ...user, Phone: e.target.value });
              }}
              id="Phone"
              className="border-b-[1px]  outline-none border-slate-300 px-16  py-2.5"
              type="number"
            />
          </div> */}
          <div className="flex flex-col my-4 space-y-1">
            <label className="text-slate-500" htmlFor="Address">
              Email
            </label>
            <input
              value={user.Email}
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
};

export default Login;
