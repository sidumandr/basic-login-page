import React from "react";
import confetti from "canvas-confetti";
import Group from "./assets/Group.png";
import User from "./assets/user.png";
import Lock from "./assets/lock.png";

const LoginPage = () => {
  const handleLoginClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div>
      <form>
        <div style={{ position: "relative" }} className="shopping-box">
          <img src={Group} alt="box" aria-hidden="true" />
          <div className="wind-effect">
            <div className="wind-line" />
            <div className="wind-line" />
            <div className="wind-line" />
            <div className="wind-line" />
            <div className="wind-line" />
          </div>
        </div>
        <div className="controls">
          <div className="input-wrapper">
            <img
              src={User}
              alt="Username Icon"
              className="icon"
              aria-hidden="true"
            />
            <input type="text" placeholder="USERNAME" className="text-input" />
          </div>
          <div className="input-wrapper">
            <img
              src={Lock}
              alt="Password Icon"
              className="icon"
              aria-hidden="true"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="text-input"
            />
          </div>
          <button type="button" onClick={handleLoginClick}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
