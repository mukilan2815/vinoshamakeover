import React from "react";
import Hero from "next/image";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brush from "../../public/brush.svg";
import {
  faPaintbrush,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="lefthome w-full mx-10 md:w-1/2 h-fit justify-center flex-col items-center">
        <h1
          style={{ color: "#A58E65" }}
          className="font-bold text-2xl justify-center flex-col items-center md:text-5xl lg:text-5xl"
        >
          Unlock Your Beauty Potential with{" "}
          <span style={{ color: "#0DBD92" }}>Vinosha</span>
          <span style={{ color: "#FF2C66" }}> Makeover</span> Where Every
          Brushstroke Tells Your Unique Story. <br />
          <img src={Brush} alt="" />
          <button
            className="py-3 mt-7 px-5 rounded-lg text-xl"
            style={{
              fontFamily: "sans-serif",
              backgroundColor: "#DDCDC6",
              color: "#000",
            }}
          >
            Book Now <FontAwesomeIcon icon={faCalendarCheck} />
          </button>
        </h1>
      </div>
      <div className="righthome hidden  md:flex md:w-fit">
        <Hero
          src="/herosection.png"
          alt="hero"
          width={380}
          height={380}
          className="absolute right-10 hidden md:flex"
        />
      </div>
    </div>
  );
};

export default Home;
