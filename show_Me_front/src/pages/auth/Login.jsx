import React, { useState } from 'react'
import Nav1 from '../components/nav1'

function Login() {
    const [form, setform] = useState({ userName: "", password: "" });

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
      };
    const handleLogin = async (e) => {
        let b = await fetch("http://localhost:3000/api/signup/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
          b = await b.json();
          console.log(b.message);
      
          if (b.message == 0) {
            alert("Invalid Username or password");
            return;
          }
          else 
          {
            localStorage.setItem("user", form.userName);
          }
        
    }
  return (
    <>
      <Nav1 />
      <div className="pt-[70px] min-h-[99vh] bg-blue-50">
        <div className="flex justify-center items-center container max-w-[50vw] h-[60vh] bg-blue-300 m-auto p-3 rounded-3xl">
          <div className="container2 bg-blue-200 py-4 px-2 inline-block rounded-2xl">
            <div className="inputs flex flex-col justify-center gap-2 items-center">
              <input
                name="userName"
                value={form.userName}
                onChange={handleChange}
                type="text"
                placeholder="Username"
                className="mx-2 px-1 min-h-[70px] min-w-[400px] my-1 bg-white rounded-2xl"
              />
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="text"
                placeholder="Password"
                className="mx-2 px-1 min-h-[70px] min-w-[400px] my-1 bg-white rounded-2xl"
              />
              <button
                className="border-2  border-blue-950 text-white px-2 py-1 disabled:bg-blue-900 rounded-lg bg-blue-600"
                onClick={handleLogin}
                disabled={form.userName.length < 5 || form.password.length < 5}
                // className="bg-green-900 disabled:bg-green-950 hover:bg-green-800 text-white rounded-2xl h-[60px] py-2 px-3 mt-[9px]"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
