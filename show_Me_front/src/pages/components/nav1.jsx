import React from "react";
import { NavLink } from "react-router-dom";

function Nav1() {
  return (
    <>
      <div className="nav p-2 bg-blue-950 text-white flex justify-between pl-7">
        <div className="logo">
        
        <span className="font-bold text-xl text-red-400">&lt;Show</span>
        <span className="font-bold text-xl text-green-600"> Me/&gt; </span>
        
        </div>
        <div className="options flex gap-7 px-3 py-1 ">
          <NavLink to ="" className="bg-blue-800 rounded-lg px-[10px]">1</NavLink>
          <NavLink to ="" className="bg-blue-800 rounded-lg px-[10px]">2</NavLink>
          <NavLink to ="/login" className="bg-blue-800 rounded-lg px-[10px]">LogIn</NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav1;
