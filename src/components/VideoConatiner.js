import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard, {AdCard} from './VideoCard';
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
    <div className='flex flex-wrap justify-evenly'> 

    {/*********  Higher order component call **********/}
    {videos[0] && <AdCard info={videos[0]} />} 
    
       { videos.map((item)=>(
           <Link to={"/watch?v=" + item.id} key={item.id}> 
            <div className='my-5'>
              <VideoCard info={item}/>
            </div>
            </Link>
        ))}
        
    </div>
  )
}

export default VideoConatiner