import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/aapSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_COMMENTS_API } from '../utils/constant';
import CommentsCard from './CommentsCard';


const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const [comments, setComments] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
        getComments();
    },[]);

    
  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + searchParams.get("v"));
    const json = await data.json();
    setComments(json?.items);
    console.log(json)
  };

  return (
    <div className='flex w-full'>

      <div className='flex flex-col'>
      <div className='px-5'>
        <iframe width="800" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='px-5 my-3'>
        
        {/*************  nth replies comments **************/}
        {/* <CommentsContainer /> */}

        <div>
          <h1 className="font-bold p-2">Comments : </h1>
          {comments?.map((comments) => (
            <CommentsCard comments={comments} key={comments.id} />
          ))}
        </div>

      </div>
      </div>

      <div className='w-full'>
        <LiveChat />
      </div>

        
    </div>
  )
}

export default WatchPage