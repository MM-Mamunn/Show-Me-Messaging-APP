import React, { useState, useEffect } from 'react';
import Chatbox from './Chatbox';
import Nav1 from '../components/nav1';

function Home() {
    const [user, setUser] = useState();
    const [friends, setFriends] = useState([]);
    const [chatFriend, setchatFriend] = useState("9999")

    useEffect(() => {
        const fetchUserData = async () => {
            const storedUser = localStorage.getItem("user");
            setUser(storedUser);
            if (storedUser) {
                await fetchFriends(storedUser);
            }
        };

        const fetchFriends = async (username) => {
            try {
              
              
                let response = await fetch(`http://localhost:3000/api/frnd/frnds/${username}`);
                let data = await response.json();
                console.log(username);
                
                setFriends(data);
            } catch (error) {
                console.error("Error fetching friends:", error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures this runs once on component mount


    const handleClick=(async(e,userName2) => {
      setchatFriend(userName2);
    })
    return (
        <div className='h-[99vh] bg-blue-100'>
          <Nav1 />
            <div className="container flex max-h-[90vh] ">
                <div className="side py-2  bg-blue-300 flex flex-col gap-2  items-center min-w-[20vw] h-[88.5vh] border-x-2 border-blue-950">
                    {friends?.map((item, index) => (
                        <div key={index}>
                          <button  onClick={(e) => handleClick(e, item.userName2)}
                          className={chatFriend == item.userName2?"btn hover:text-green-300 truncate  md:w-[300px] p-1 px-2 rounded-2xl bg-blue-950 font-bold text-white ":"btn truncate hover:text-green-300 md:w-[300px] p-1 px-2 rounded-2xl bg-blue-900 text-white "
                          }
                          >{item.userName2}</button>
                        </div>
                    ))}
                </div>
                <div className="body  w-full ">
                    <Chatbox chatFriend = {chatFriend}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
