import React from 'react'
import {formatViewCount} from "../utils/helper"

const VideoCard = ({info}) => {
    // console.log(info);

    const { snippet, statistics} = info;
    const {thumbnails,title } = snippet;

    const viewCount = statistics.viewCount;
    const formattedViewCount = formatViewCount(viewCount ? viewCount : "N/A");

   
  return (
    <div className=' m-2 w-96 shadow-lg h-[350px] '>

      <div className=''>
        <img className='rounded-lg w-full ' alt='thumbnail' src={thumbnails.medium.url} />
      </div>
     
        <ul className='my-2 pl-[10px] flex flex-col items-start'>
          <li className='font-bold py-2'>{title}</li>
          <li>{snippet.channelTitle}</li>
         {/* <li>{statistics.viewCount}</li> */}
         <li>{formattedViewCount} Views</li>
        </ul>

    </div>
  )
}

export const AdCard = ({info}) => {
  return (
    <div className=' border border-red-700 items-center flex'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard;

