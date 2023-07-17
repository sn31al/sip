import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import img from "../assets/bg1.jpg";
export default function Signin() {
  const User = localStorage.getItem("UserName");
  const navigate = useNavigate();
  const GoDashboard = () => {
    if (User) {
      navigate("/dashboard");
    } else {
      navigate("/vendor");
    }
  };

  const parallaxRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const yOffset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${-yOffset * 0.2}px`;
        setIsScrolling(true);
      }
    };

    const handleScrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 20000); // Adjust the timeout value as needed

    window.addEventListener("scroll", handleParallax);
    return () => {
      clearTimeout(handleScrollTimeout);
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  const words = ["Photography", "Decors", "Catering", "Sounds", "Lights"];

  return (
    <>
      <div
        ref={parallaxRef}
        className="relative w-screen h-screen parallax-container"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center pt-40 text-5xl text-white font-bold">
          WELCOME TO EDUEVENT!!
        </div>
        <div className="text-center text-big text-white mt-3 font-bold">
          Browse Vendors like!
        </div>
        <div className="flex justify-center text-white font-bold">
          <TypeAnimation
            sequence={words}
            style={{ fontSize: "2.5em", textAlign: "center" }}
            repeat={Infinity}
            repeatDelay={5000}
            speed={200}
            paused={!isScrolling}
          />
        </div>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 p-7 text-center bg-teal-100 rounded-xl">
          <div className="space-y-2">
            <p className="text-black">Choose your Role</p>
          </div>
          <div className="flex flex-col justify-center my-8 space-y-4 font-semibold">
            <Link to={"/Home"}>
              <button className="px-24 py-2.5 text-white duration-300 ease-in-out bg-sky-600 rounded-full shadow-xl cursor-pointer hover:scale-110">
                User
              </button>
            </Link>
            <button
              onClick={GoDashboard}
              className="px-24 py-2.5 text-white duration-300 ease-in-out bg-green-700 rounded-full shadow-xl cursor-pointer hover:scale-110"
            >
              Vendor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
