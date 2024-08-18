import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav1() {
  const [user, setuser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const u = localStorage.getItem("user");
    setuser(u);
  });

  const handleClick = () => {
    localStorage.setItem("user", "9999");
    localStorage.setItem("secret", "9999");
    localStorage.removeItem("secret");
    navigate("/login");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="nav p-2 bg-blue-950 text-white flex justify-between pl-7">
        <div className="logo">
          <span className="font-bold text-xl text-red-600">&lt;Show</span>
          <span className="font-bold text-xl text-green-600"> Me/&gt; </span>
        </div>

        <div className="options flex gap-7 px-3 py-1 ">
          {/* <NavLink to ="" className="bg-blue-900 py-[3px] w-[100px] text-center rounded-lg px-[10px] hover:bg-blue-800">1</NavLink> */}
          {/* <NavLink to ="" className="bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800">2</NavLink> */}
          {localStorage.getItem("user") &&
            localStorage.getItem("user") != "9999" && (
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-800 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-900"
                    : "bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800"
                }
                // className="bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800"
              >
                Home
              </NavLink>
            )}
          {!localStorage.getItem("user") ||
            (localStorage.getItem("user") == "9999" && (
              <NavLink
                to="/"
                className="bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[3px] hover:bg-blue-800"
              >
                Sign Up
              </NavLink>
            ))}
          {localStorage.getItem("user") &&
            localStorage.getItem("user") != "9999" && (
              <NavLink
                to="/frnds"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-800 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-900"
                    : "bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800"
                }
              >
                Find
              </NavLink>
            )}
          {!localStorage.getItem("user") ||
            (localStorage.getItem("user") == "9999" && (
              <NavLink
                to="/"
                className="bg-blue-900 py-[3px] w-[100px] text-center  rounded-lg px-[3px] hover:bg-blue-800"
              >
                2
              </NavLink>
            ))}
          {localStorage.getItem("user") &&
            localStorage.getItem("user") != "9999" && (
              <button
                onClick={handleClick}
                className="bg-blue-900 py-[3px]  w-[100px] text-center  rounded-lg px-[10px] hover:bg-blue-800"
              >
                LogOut
              </button>
            )}
          {!localStorage.getItem("user") ||
            (localStorage.getItem("user") == "9999" && (
              <NavLink
                to="/login"
                className="bg-blue-900 py-[3px]  w-[100px] text-center  rounded-lg px-[3px] hover:bg-blue-800"
              >
                LogIn
              </NavLink>
            ))}
          {localStorage.getItem("user") &&
            localStorage.getItem("user") != "9999" && (
              <div className="flex gap-1 justify-center items-center bg-blue-900 text-white font-bold p-1 py-[3px]  w-auto rounded-full  bottom-1 left-1 fixed text-center   px-[10px] hover:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                {user}
              </div>
            )}
          {!localStorage.getItem("user") ||
            (localStorage.getItem("user") == "9999" && (
              <NavLink
                to="/login"
                className="bg-blue-900 py-[3px]  w-[100px] text-center  rounded-lg px-[3px] hover:bg-blue-800"
              >
                4
              </NavLink>
            ))}
        </div>
      </div>
    </>
  );
}

export default Nav1;
