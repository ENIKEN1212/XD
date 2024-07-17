import React, { useEffect, useState } from 'react'
import "./chatList.css"
import search from "../../../Assets/search.svg"
import Plus from "../../../Assets/add.png"
import minus from "../../../Assets/minus-circle.png"
import Avatar from "../../../Assets/user.png"
import { useUserStore } from '../../../lib/userStore'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../lib/firebase'
const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setMode] = useState(false);

  const  {CurrentUser} = useUserStore()

//   useEffect(()=> {
//     const unSub = onSnapshot(doc(db, "userchats", CurrentUser.id), async (doc) => {
//     const  item = doc.data().chats;

//     const promisses = item.map( async (item) => {
      
// const userdocRef = doc(db, "users", item.reciver.Id);
// const userdocSnap = await getDoc(userdocRef);

// const user = userdocSnap.data()

// return{}
//     })

//   });


//   return () =>{
//     unSub()
//   }
  
//   },[CurrentUser.id])

  // console.log(chats);
  return (
    <div className='chatList'>
      <div className='search'>
        <div className="searchbar">
          <img className='serch' src={search} alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img className='plus' src={addMode ? { minus } : Plus} alt=""
          onClick={() => setMode(prev => !prev)} />
      </div>
      {chats.map(chat=>(
      <div className='item' key={chat.chatId} >
          <img src={Avatar} alt="" /> 
          <div className="texts">
            <span>
              Olim
            </span>
             <p>{chat.lastMessage}</p>
          </div>
      </div>
      ))}
      

    </div>
  )
}

export default ChatList
