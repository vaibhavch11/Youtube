import React, { useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import generateRandomName ,{getRandomEmoji} from "../utils/helper";

const LiveChat = () => {

    const [liveMessage,setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const liveChatMessages = useSelector((store)=> store.chat.messages);

useEffect(()=>{
    const i = setInterval(()=>{
    //    console.log("API Polling");  //API Polling

       dispatch(addMessage({
        name: generateRandomName(),
        message : "Lorem Ipsum Dolor Site" + getRandomEmoji()
       }))
    },2000);

    return() => clearInterval(i);
},[]);

  return (
    <>
    <div className='p-1 border border-black h-[500px] w-full  bg-gray-50 rounded-lg overflow-y-scroll flex flex-col-reverse '>
        {liveChatMessages.map((c,i)=>(
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
        
    </div>

    <form className="w-full p-2 border border-gray-400" onSubmit={(e)=>{ e.preventDefault()

       console.log("ON Form Send ", liveMessage);
       dispatch(addMessage({
        name: "Vaibhav Chauhan",
        message: liveMessage
       }))

       setLiveMessage("");
    }}>
        <input className='w-60 p-2 border border-gray-400' type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button className='bg-green-300 ml-3 p-2 rounded-sm'>Send</button>
    </form>
    </>
  )
}

export default LiveChat