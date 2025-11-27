import React from "react";
import SideBar from "./common/SideBar";
import { Outlet } from "react-router-dom";
import "./system.css";

const System = () => {
  return (
    <div className="system">
      <SideBar />
      <div className="right">
        <div className="system-header">
            <div className="welcome"><img src="./images/system/title-p.png" alt="" /></div>
            <div className="options">
              <div className="options-user">
                <button><img src="./images/system/profile.png" alt="" /></button>
                <button><img src="./images/system/noti.png" alt="" /></button>
                <button><img src="./images/system/exit.png" alt="" /></button>
              </div>
            </div>
        </div>
        <section className="windows">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default System;
