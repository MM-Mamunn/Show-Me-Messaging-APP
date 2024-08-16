import React from "react";
import { NavLink } from "react-router-dom";

function Nav1() {
  return (
    <>
      <div className="nav p-2 bg-blue-950 text-white flex justify-between pl-7">

        <div className="logo">
        <span className="font-bold text-xl text-red-600">&lt;Show</span>
        <span className="font-bold text-xl text-green-600"> Me/&gt; </span>
        </div>


        <div className="options flex gap-7 px-3 py-1 ">
          <NavLink to ="" className="bg-blue-900 py-[3px] w-[100px] text-center rounded-lg px-[10px] hover:bg-blue-800">1</NavLink>
          <NavLink to ="" className="bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800">2</NavLink>

          { localStorage.getItem("user") && localStorage.getItem("user") != "9999" && 
          <NavLink to ="/logOut" className="bg-blue-900 py-[3px]  w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800">LogOut</NavLink>
           }
          { !localStorage.getItem("user") || localStorage.getItem("user") == "9999" && 
          <NavLink to ="/login" className="bg-blue-900 py-[3px]  w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800">LogIn</NavLink>
           }

        </div>
      </div>
    </>
  );
}

export default Nav1;
