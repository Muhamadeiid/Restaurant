import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Home from "../../Routes/Home";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import logo from "./../../Images/Logo.jpg";

const Nav = () => {
  let [bigMenu, setBigMenu] = useState(false);
  let [menu, setMenu] = useState(false);
  let [scrolling, setScroll] = useState(false);
  let windowHandler = () => {
    let windowSize = window.innerWidth;
    if (windowSize < 700) {
      setMenu(true);
    } else {
      setMenu(false);
      setBigMenu(false);
    }
  };
  let scrollingHandler = () => {
    let windowScroll = window.scrollY;
    console.log(windowScroll);
    if (windowScroll > 350) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  let menuHandler = () => {
    setBigMenu(!bigMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", windowHandler);
    window.addEventListener("scroll", scrollingHandler);
    windowHandler();
    scrollingHandler();
  }, [setScroll, setMenu]);
  return (
    <>
      <header className={scrolling ? "fixingScroll" : undefined}>
        <nav>
          <img src={logo} alt="my-logo" />
          <ul
            style={menu ? { display: "none" } : undefined}
            className={bigMenu ? "bigMenu" : ""}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <IoCartOutline size={30} />
              </NavLink>
            </li>
          </ul>
          {bigMenu ? (
            <IoMdClose size={30} fill="black" onClick={menuHandler} />
          ) : (
            menu && <FaBars size={30} fill="black" onClick={menuHandler} />
          )}
        </nav>
      </header>
    </>
  );
};

export default Nav;
