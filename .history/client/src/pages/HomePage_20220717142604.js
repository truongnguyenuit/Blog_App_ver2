import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center relative'>
        <span className="text-[20px] absolute top-9">
          React & Node
        </span>
        <span className="text-[100px]  absolute">
          BLOG
        </span>
        <div className="w-full h-[450px]">
          <img 
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="" 
          className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default HomePage