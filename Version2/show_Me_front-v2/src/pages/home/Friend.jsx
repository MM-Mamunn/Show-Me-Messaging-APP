import React, { useEffect, useState } from "react";
import Nav1 from "../components/nav1";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const [found, setfound] = useState(-1);
  //laoding == 6 means frnd loading
  //loading == 7 means searching
  const [loading, setloading] = useState(0);

  useEffect(() => {
    const fetchFriends = async () => {
      setloading(6);
      let user = localStorage.getItem("user");
      console.log(user);

      let response = await fetch(
        `http://localhost:3000/api/frnd/frnds/${user}`
      );
      let data = await response.json();
      setFriends(data);
      setloading(0);
    };

    fetchFriends();
  }, []); // Dependency array is empty, so this runs only once after the initial render.

  const handleChange = (e) => {
    setfound(-1);
    setsearchbox(e.target.value);
  };
  const handleAdd = async () => {
    console.log("clicked");
    setsearchbox("");
    setfound(-1);
    let user = localStorage.getItem("user");
    let a = {
      userName1: user,
      userName2: searchbox,
    };
    let b = await fetch("http://localhost:3000/api/frnd/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    b = await b.json();

    let response = await fetch(`http://localhost:3000/api/frnd/frnds/${user}`);
    let data = await response.json();
    setFriends(data);
    setsearchbox("");
    setfound(-1);
  };

  const handleSearch = async () => {
    setloading(7);
    let user = localStorage.getItem("user");
    if (user == searchbox) {
      setfound(0);
      return;
    }
    ///check already frnds or not
    let a2 = {
      userName1: searchbox,
      userName2: user,
    };

    let b2 = await fetch("http://localhost:3000/api/frnd/frndcheck/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a2),
    });
    b2 = await b2.json();
    console.log(b2);

    if (b2.message == 1) {
      alert("Already Friends");
      setloading(0);
      return;
    }

    let a = {
      userName: searchbox,
    };

    let b = await fetch("http://localhost:3000/api/signup/usercheck/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    b = await b.json();
    console.log(b);

    if (b.message == 1) {
      setfound(1);
      setloading(0);
      return;
    } else setfound(0);
    setloading(0);
  };

  return (
    <>
      <Nav1 />
      <div className="bg-blue-50 m-0 lg:p-2 h-[88vh]">
        <div className="flex justify-between m-2">
          <div className="container border-2 lg:min-h-[60vh] min-h-[35vh] border-blue-950 w-[50vw] lg:w-[50vw] m-1 lg:m-3 bg-blue-300  pt-[60px] rounded-3xl">
            <div className="flex justify-center items-center ">
              {/* card */}

              <div className="container2 bg-blue-200 py-[2px] lg:py-8 px-[2px] lg:px-2 inline-block rounded-2xl">
                <div className="inputs w-[45vw] flex flex-col justify-center gap-2 items-center">
                  <h2 className="font-bold text-slate-700">Search User</h2>
                  <input
                    name="Search"
                    value={searchbox}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search"
                    className="mx-2 lg:px-1 px-[2px] min-h-[70px] w-[40vw] lg:w-[400px] my-1 bg-white rounded-2xl"
                  />
                  {searchbox.length < 5 ? (
                    searchbox.length >= 1 ? (
                      <div className="text-[14px] font-bold ml-[6vw] text-red-600 ">
                        {5 - searchbox.length} more characters needed minimum
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {loading != 7 && (
                    <button
                      className="border-2 mb-[2px] border-blue-950 text-white px-2 py-1 disabled:bg-blue-900 rounded-lg bg-blue-600"
                      onClick={handleSearch}
                      disabled={searchbox.length < 5}
                      // className="bg-green-900 disabled:bg-green-950 hover:bg-green-800 text-white rounded-2xl h-[60px] py-2 px-3 mt-[9px]"
                    >
                      search
                    </button>
                  )}
                  {loading == 7 && (
                    <button
                      className="border-2  border-blue-950 text-white px-2 py-1 disabled:bg-blue-900 rounded-lg bg-blue-600"

                      // className="bg-green-900 disabled:bg-green-950 hover:bg-green-800 text-white rounded-2xl h-[60px] py-2 px-3 mt-[9px]"
                    >
                      <div className="flex items-center justify-center ">
                        <div className="w-[40px] h-[40px] border-t-4 border-blue-500 border-solid rounded-full animate-spin">
                          *
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {found == 0 && (
              <>
                <div className="line min-w-[40vw] m-2 border-2 border-black"></div>
                <div className="fnd lg:ml-[200px] mt-3">
                  <button className="btn no-scrollbar max-w-[45vw] lg:max-w-[20vw] max-h-[40vh] overflow-y-auto overflow-x-clip break-words ml-[2vw] lg:ml-5 bg-blue-800 text-white   font-serif font-bold min-w-[20vw] m-auto rounded-lg p-2">
                    {searchbox} Not Found
                  </button>
                </div>
              </>
            )}
            {found == 1 && (
              <>
                <div className="line min-w-[40vw] m-2 border-2 border-black"></div>
                <div className="fnd lg:ml-[200px] mt-3">
                  <button
                    onClick={handleAdd}
                    className="btn no-scrollbar max-w-[20vw] max-h-[40vh] overflow-y-auto overflow-x-clip break-words ml-5 bg-blue-800 text-white   font-serif font-bold min-w-[20vw] m-auto rounded-lg p-2 "
                  >
                    Add {searchbox}
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="line min-h-[25vh]  border-2 border-blue-800"></div>
          <div className="extra">
            <div className="pt-3">
              <div className="container  min-h-[80vh] min-w-[20vw] max-w-[40vw]  bg-blue-300 rounded-3xl px-[1px] lg:px-2">
                <h2 className="text-blue-900 font-bold ml-5">Friends</h2>
                <div className="line m-2 border-2 border-black"></div>
                {loading != 6 && (
                  <div className="scrl h-[68vh]  overflow-y-scroll no-scroll scrollbar-thin scrollbar-thumb-blue-700  scrollbar-track-gray-200">
                    {friends?.map((item, index) => (
                      <div key={index}>
                        <div className="flex">
                          {/* <div
                          className="circle h-[50px] w-[50px] text-center bg-green-900 text-white rounded-full p-1"
                        >
                          {index + 1}
                          </div> */}
                          <button className="btn truncate  lg:ml-2 bg-blue-800 text-white font-serif font-bold w-[24vw] lg:w-[20vw] m-auto  rounded-lg p-[2px] lg:p-2 ">
                            {item._doc.userName2}
                          </button>
                        </div>
                        <div className="line mr-[9px] ml-[75px] min-w-[5vw] mb-[2px] border-2 border-blue-950"></div>
                      </div>
                    ))}
                    {!friends.length && (
                      <div className="font-bold text-3xl opacity-30 text-blue-900">
                        No Friend Yet
                      </div>
                    )}
                  </div>
                )}
                {loading == 6 && (
                  <button
                    className="border-2  border-blue-950 text-white mt-[30vh] ml-[7vw] px-2 py-1 disabled:bg-blue-900 rounded-lg bg-blue-600"

                    // className="bg-green-900 disabled:bg-green-950 hover:bg-green-800 text-white rounded-2xl h-[60px] py-2 px-3 mt-[9px]"
                  >
                    <div className="flex items-center justify-center ">
                      <div className="w-[40px] h-[40px] border-t-4 border-blue-500 border-solid rounded-full animate-spin">
                        *
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;
