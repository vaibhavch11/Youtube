import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/aapSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='flex w-full'>

      <div className='flex flex-col'>
      <div className='px-5'>
        <iframe width="800" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='px-5 my-3'>
        <CommentsContainer />
      </div>
      </div>

      <div className='w-full'>
        <LiveChat />
      </div>

        
    </div>
  )
}

export default WatchPage