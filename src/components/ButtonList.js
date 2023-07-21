import React from 'react'

const ButtonList = () => {

    const List = ['All','Gaming','Music','Live','Dance','Study','Cricket','Football','Chess','Cooking'];
  return (
    <div className='flex flex-wrap mt-2'>
        {List.map((item)=>(
            <button className='bg-gray-200 px-5 py-2 m-2 rounded-lg'>{item}</button>
        ))}
        
    </div>
  )
}

export default ButtonList