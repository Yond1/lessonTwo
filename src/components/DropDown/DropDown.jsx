import React, { useState } from "react";
import data from "./../../image/DataImageToolbar";

const DropDown = () => {
  let data = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const [show, setShow] = useState("");
  const [el,setEl] = useState()
  const onHandlerToggleDropDown = () => {
    show ? setShow((prev) => (prev = "")) : setShow((prev) => (prev = "open"));
  };
  const onHandlerElement = (e) => {
    setEl(prevEl => prevEl = e)
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper " + show}>
        <button
          data-id="toggle"
          className="btn"
          onClick={() => {
            onHandlerToggleDropDown();
          }}
        >
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <ul data-id="dropdown" className="dropdown">
          {data.map((item) => {
            return (
              <li className={el === item ? 'active' : ''}>
                <a
                onClick={() => {onHandlerElement(item)}}
                 href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
