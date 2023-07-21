import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoConatiner = () => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
       getVideos();
    },[]);

    const getVideos = async ()=> {
       const data = await fetch(YOUTUBE_VIDEO_API);
       const json = await data.json();
       setVideos(json.items);
    }

  return (
    <div className='flex flex-wrap'> 
       { videos.map((item)=>(
           <Link to={"/watch?v=" + item.id} > <VideoCard info={item}/></Link>
        ))}
        
    </div>
  )
}

export default VideoConatiner