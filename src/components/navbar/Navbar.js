import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { links } from "./data";
import "./Navbar.css";
import Image_logo from "../../logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img link="/" src={Image_logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <GiHamburgerMenu />
          </button>

          <h3>ABC Students Grading System</h3>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a to={url}>{text}</a>
                </li>
              );
            })}
            {/* {links.map(({ url, text }, id) => {
              return (
                <li>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
