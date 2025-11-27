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
            <div className="options">safas</div>
        </div>
        <section className="windows">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default System;
