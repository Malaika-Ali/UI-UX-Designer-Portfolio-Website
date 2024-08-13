import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Navbar = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);

  let Links = [
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "SERVICES", link: "#services" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
    { name: "REVIEWS", link: "#reviews" },
  ];

  return (
      <nav className="main-nav">
        {/* logo part  */}
        <div className="logo">
          <h2>
            <span>M</span>arry
            <span>S</span>mith
          </h2>
        </div>

        {/* menu part  */}
        <div
          className={
            showMenuButton ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            {
              Links.map((link) => (
                <li key={link.name}
                >
                  <a href={link.link}
                    className='text-base hover:text-gray-400 duration-500'
                  >{link.name}</a>
                </li>
              ))
            }

          </ul>
        </div>

        {/* CTA Button */}
        <div className="CTA-btn">
          <div className="CTA-btn-desktop">
            <a
              className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2 text-accent hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary rounded-full"
              href="#"
            >
              <span className="text-base font-semibold"> Resume </span>
              <PiDownloadSimpleBold />
            </a>
          </div>



          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMenuButton(!showMenuButton)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;