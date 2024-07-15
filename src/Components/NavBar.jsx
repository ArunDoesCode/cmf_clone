import React, { useEffect, useRef, useState } from "react";

import logo from "../assets/logo.svg";

const NavBar1 = () => {
  return (
    <nav className="flex justify-between items-center pl-2">
      <a href="#">
        <img src={logo} alt="logo" className="h-24 w-24" />
      </a>

      <ul className="flex w-1/2 justify-between font-custom text-lg px-20">
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
};

const NavBar2 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      if (rect.bottom <= 0) {
        setIsSticky(true);
        console.log(rect.bottom);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex justify-between items-center p-4 transition-all duration-300 ease-in-out 
		${isSticky ? "bg-dark_grey" : "bg-half_white"}`}
    >
      <p className="text-2xl">Buds</p>
      <ul className="flex w-1/2 justify-between px-8">
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Spec</a>
        </li>
        <li>
          <button className="uppercase bg-orange text-white py-2 px-4 rounded hover:bg-orange-dark">
            Buy Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

const NavBar = () => {
  return (
    <div className="bg-half_white uppercase">
      <NavBar1 />
      <NavBar2 />
    </div>
  );
};

export default NavBar;
