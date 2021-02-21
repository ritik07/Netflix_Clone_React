import React, { useState, useEffect } from "react";
import "../Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window);
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  // function addshow() {
  //   if (show > 0) {
  //     return "nav__black";
  //   }
  // }

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* <div className={`nav ${show && "nav_black"}`> */}
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
