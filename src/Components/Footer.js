import React from "react";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black h-[30vh] w-screen">
      <ul className="flex items-center justify-center py-10 space-x-8 text-white">
        <Link to={"/about"}>
          <li className="cursor-pointer">About Us</li>
        </Link>
        <Link to={"/contact"}>
          <li className="cursor-pointer">Become a Sponser</li>
        </Link>
      </ul>
      <div className="flex items-center justify-center my-6 space-x-5">
        <FiInstagram size={30} color="white" />
        <BsLinkedin size={30} color="white" />
        <FaWhatsapp size={30} color="white" />
      </div>
    </footer>
  );
}
