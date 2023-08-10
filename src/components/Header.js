import React, { Component, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/aapSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/constant';
import { compose } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const Header = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [searchSuggestions,setSearchSuggestions] = useState([]);

  //show suggestion only while we are on input box
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(()=>{
     
    //make an api call after ever key press
    // but if  the difference between 2 api is <200ms, then decline the api call
    const timer = setTimeout(()=> getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };

    // getSearchSuggestions();

  },[searchQuery]);


  // key - "i"
  //  - render the Component
  //  - useEffect
  //  - start time => make api call after 200ms

  // key - "ip"
  //  - render the Component
  //  - useEffect()
  //  - start timer => make api call after 200ms
  

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    // console.log(json[1]);
  }

    const dispatch = useDispatch();

    const handleHamburger = ()=> {
        dispatch(toogleMenu()); //it doesn't take anything just making true to false & vice-versa.
    }

  return (
    <div className="grid grid-flow-col p-4 shadow-xl items">
       <div className='flex col-span-1 ' >
         <img alt='hamburger-logo' className='h-8 cursor-pointer' onClick={handleHamburger} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' />
         <img alt='logo' className='h-8 mx-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png"/>
       </div>

      <div className='col-span-10  '>
        <div>
          <input className='w-1/2 border  border-gray-200 rounded-l-lg p-2 focus:outline-none' 
              type='text' value={searchQuery} 
              onChange={(e)=>{setSearchQuery(e.target.value)}}
              onFocus={()=> setShowSuggestions(true)}
              onBlur={()=> setShowSuggestions(false)}
          />
          <button className='border border-gray-200 rounded-r-lg p-2 '>Search</button>
        </div>

         {showSuggestions && (
          <div className='absolute bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg'>
          <ul>
            {searchSuggestions.map((item)=>(
                <li key={item} className=' py-2 shadow-sm hover:bg-gray-100'>{item}</li>
            ))}
 
          </ul>

        </div>
         )}
        
       
      </div>

       <div className='col-span-1'>
        <img className='h-8' alt='user-img' src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" />
       </div>
    </div>
  )
}

export default Header