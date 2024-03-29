"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [navvisible, setNavVisible] = useState(false);

  return (
    <nav className="flex z-10 justify-between">
      <div>
        <Image src="/logo.jpeg" alt="Logo" width={190} height={190} />
      </div>
      {navvisible ? (
        <div className=" z-50 absolute bg-black w-full h-full flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#A58E65" }}
            onClick={() => setNavVisible(false)}
            className="absolute w-12 h-12 p-2 cursor-pointer right-10 top-10 shadow-md hover:shadow-sm focus:shadow-none  rounded-full"
          />
          <ul className="flex-col">
            <li key="home">Home</li>
            <li key="about">About</li>
            <li key="services">Services</li>
            <li key="gallery">Gallery</li>
            <li key="testimonial">Testimonial</li>
            <li key="blog">Blog</li>
            <li key="shop">Shop</li>
            <li key="faq">FAQ</li>
            <li key="contact">Contact</li>
          </ul>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#0DBD92" }}
            onClick={() => setNavVisible(true)}
            className="mt-20 md:mt-14 cursor-pointer w-6 h-6 md:mr-28 mr-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
