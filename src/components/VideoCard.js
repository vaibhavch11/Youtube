import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const { snippet, statistics} = info;
    const {thumbnails,title ,localized} = snippet;
  return (
    <div className='p-2 m-2 w-60 shadow-lg '>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul className=''>
          <li className='font-bold py-2'>{title}</li>
          <li>{snippet.channelTitle}</li>
         <li>{statistics.viewCount}</li>
        </ul>

    </div>
  )
}

export default VideoCard