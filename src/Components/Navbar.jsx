import { useState } from "react";
import { Link } from "react-router-dom";
import Upload from "../models/Upload";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../assets/Logo.png";
import Login from "./Login";

const Navbar = ({ Vendor }) => {
  const [toggle, setToggle] = useState(false);
  const [upload, setUpload] = useState(false);
  const [login, setlogin] = useState(false);

  return (
    <nav className="p-2 shadow-md">
      <div className="flex items-center justify-between px-10">
        <div>
          <Link to={"/Home"}>
            <img src={Logo} className="rounded-full w-[90px]" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className={`lg:hidden`}
          >
            <CiMenuFries size={30} />
          </div>
          <div>
            <ul
              className={` hidden md:block  lg:space-x-8 pr-10 text-sm text-[#7c7c7c] items-center lg:flex`}
            >
              {Vendor ? (
                <>
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      setlogin(true);
                    }}
                  >
                    Login
                  </li>
                  <li
                    onClick={() => {
                      setUpload(true);
                    }}
                    className="cursor-pointer"
                  >
                    Register
                  </li>
                  <li className="cursor-pointer">
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                </>
              ) : null}
              <Link className="cursor-pointer font-bold text-black" to="/">
                Home
              </Link>
              <li className="cursor-pointer font-bold text-black">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={` text-center space-y-4 ${toggle ? "block" : "hidden"}`}>
        {Vendor ? (
          <>
            <li
              className="cursor-pointer"
              onClick={() => {
                setlogin(true);
              }}
            >
              Login
            </li>
            <li
              onClick={() => {
                setUpload(true);
              }}
              className="cursor-pointer"
            >
              Register
            </li>
          </>
        ) : null}
        <li>
          <Link className="cursor-pointer " to="/">
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about">About</Link>
        </li>
      </ul>
      {upload && <Upload setUpload={setUpload} />}
      {login && <Login setlogin={setlogin} />}
    </nav>
  );
};

export default Navbar;
