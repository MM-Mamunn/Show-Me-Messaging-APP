import React, { useState,useEffect } from 'react'

function Home() {
    const [user, setuser] = useState()
    useEffect(() => {
       let  passwords = localStorage.getItem("user");
       setuser(passwords)
       console.log(user);
       
    
    }, [])
    
  return (
    <>
      welcome {user}
    </>
  )
}

export default Home
