import React from 'react'

const PostComponent = ({ title, description }) => {
  return (
    <div className="w-[395px] mx-6 my-2 flex flex-col items-center">
      <img className="w-full h-[280px] object-cover" src={'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg'} alt="" />
      
        <h1 className="text-[24px] font-bold cursor-pointer">{title}</h1>
      
      
      <p className="leading-6 font-normal">{description.substring(0,110)},...</p>
    </div>
  );
};

export default PostComponent