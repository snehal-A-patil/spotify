import React from "react";
import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import Playlistes from "./Sidebar/Playlistes";
function Sidebar() {
  return (
    <>
      <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
        <div className="mb-7 px-6">
          <img src={logo}></img>
        </div>
        <Menu />
        <Playlistes />
      </aside>
    </>
  );
}

export default Sidebar;
