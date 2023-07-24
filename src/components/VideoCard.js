import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const { snippet, statistics} = info;
    const {thumbnails,title ,localized} = snippet;
  return (
    <div className='p-2 m-2 w-80 shadow-lg h-full '>

      <div className='p-2'>
        <img className='rounded-lg w-full ' alt='thumbnail' src={thumbnails.medium.url} />
      </div>
     
        <ul className='my-2'>
          <li className='font-bold py-2'>{title}</li>
          <li>{snippet.channelTitle}</li>
         <li>{statistics.viewCount}</li>
        </ul>

    </div>
  )
}

export const AdCard = ({info}) => {
  return (
    <div className='p-1 m-1 border border-red-700'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;

