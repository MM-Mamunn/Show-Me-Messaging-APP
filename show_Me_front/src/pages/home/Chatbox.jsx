import React, { useEffect, useRef, useState } from "react";

function Chatbox({ chatFriend }) {
  const [text, settext] = useState("");
  const [user, setuser] = useState("");
  const [all, setall] = useState([]);
  const scrollRef = useRef(null);


///decode 
function recoverString(str, n) {
  // Helper function to shift a single character backward
  const shiftCharBackward = (char, n, start) => {
      const charCode = char.charCodeAt(0);
      const newCharCode = ((charCode - start - n + 26) % 26) + start;
      return String.fromCharCode(newCharCode);
  };

  return str.split('').map(char => {
      if (char >= 'A' && char <= 'Z') {
          // Shift uppercase letters backward
          return shiftCharBackward(char, n, 65);
      } else if (char >= 'a' && char <= 'z') {
          // Shift lowercase letters backward
          return shiftCharBackward(char, n, 97);
      } else {
          // Non-alphabetic characters remain unchanged
          return char;
      }
  }).join('');
}

  const fetchall = async () => {
    let user = localStorage.getItem("user");
    let a = {
      from: user,
      to: chatFriend,
    };
    let b = await fetch("http://localhost:3000/api/msg/all/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    b = await b.json();
    for(let i = 0;i<b.length;i++) {
      let recoveredString = recoverString(b[i].text, 2);
      b[i].text = recoveredString
    }
    setall(b);
    
    //   console.log(b);
  };

  useEffect(() => {
    let u = localStorage.getItem("user");
    setuser(u);
    console.log(chatFriend);
    fetchall();
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatFriend]);

  const handleChange = (e) => {
    settext(e.target.value);
  };


  function shiftString(str, n) {
    // Helper function to shift a single character forward
    const shiftCharForward = (char, n, start) => {
        const charCode = char.charCodeAt(0);
        const newCharCode = ((charCode - start + n) % 26) + start;
        return String.fromCharCode(newCharCode);
    };

    return str.split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            // Shift uppercase letters forward
            return shiftCharForward(char, n, 65);
        } else if (char >= 'a' && char <= 'z') {
            // Shift lowercase letters forward
            return shiftCharForward(char, n, 97);
        } else {
            // Non-alphabetic characters remain unchanged
            return char;
        }
    }).join('');
}
  const handleText = async () => {
//algorithm for encode


const shiftedString = shiftString(text,2);

    let a = {
      from: user,
      to: chatFriend,
      text: shiftedString,
    };
    let b = await fetch("http://localhost:3000/api/msg/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    b = await b.json();
    fetchall();
    console.log(b);
    settext("");
  };
  return (
    <>
      <div className=" flex flex-col ">
        <div
          ref={scrollRef}
          className="scrl overflow-y-scroll no-scroll max-h-[75vh] box border-2 w-full min-h-[76vh]"
        >
          {chatFriend == "9999" && (
            <div className="py-[34vh] px-[40px] font-bold text-2xl opacity-30 text text-slate-500">
              Don't Show Your Messages to anyone without your permissions
            </div>
          )}
          {chatFriend != "9999" &&
            all?.map((item, index) => (
              <div
                key={index}
                className={
                  item.from == user
                    ? "one text-[20px] bg-blue-700 max-w-[40vw] text-white rounded-xl break-words bo ml-[35vw] mt-2 p-2"
                    : "one  max-w-[40vw]  break-words text-[20px] bg-slate-600 rounded-xl text-white ml-[4vw] mt-2 p-2"
                }
              >
                {item.text}
                <div className="date pl-[340px] opacity-40 text-black text-[20px]">
                  {item.updatedAt}
                </div>
              </div>
            ))}
        {chatFriend!= "9999" && all.length == 0 &&  <div className="py-[34vh] px-[40px] font-bold text-2xl opacity-30 text text-slate-500">
              Be the first to message
            </div>}
        </div>

        {chatFriend != "9999" && (
          <div className="input border-2 w-full flex ">
            <input
              name="text"
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="text"
              className="mx-3 px-2 min-h-[70px] min-w-[70vw] my-1 bg-white rounded-2xl"
            />
            <button
              className="border-2 font border-blue-950 w-[70px] p-2 rounded-full flex justify-center items-center text-white px-2 py-1 disabled:bg-blue-900  bg-blue-600"
              onClick={handleText}
              disabled={text.length < 1}
             
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Chatbox;
