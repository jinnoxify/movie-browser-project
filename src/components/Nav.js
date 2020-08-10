import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav-bar ${show && "new-nav-bar"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/640px-Logo_Netflix.png"
        alt="netflix-logo"
        className="netflix-photo"
      ></img>
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="profile"
        className="profile-photo"
      ></img>
    </div>
  );
}
