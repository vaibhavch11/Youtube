import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    
  return (
    <div className='p-5 m-2 shadow-lg w-48'>

       <ul>
            <li><Link to="/">Home</Link> </li>
            <li>short</li>
            <li>Subscriptions</li>
        </ul>

        <h1 className='mt-4 font-bold py-2'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Games</li>
            <li>Live</li>
        </ul>

        <h1 className='mt-4 font-bold py-2'>Liked</h1>
        <ul>
            <li>Watch Later</li>
            <li>Your Videos</li>
            <li>History</li>
            <li>Library</li>
        </ul>

        <h1 className='mt-4 font-bold py-2'>Setting</h1>
        <ul>
            <li>Report</li>
            <li>History</li>
            <li>Help</li>
            <li>Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar