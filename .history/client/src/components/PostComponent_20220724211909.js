import React from 'react'

const PostComponent = ({ title, description, img, user, time }) => {
  return (
    <div className="w-[430px] mx-6 my-2 flex flex-col bg-white drop-shadow-md rounded-[8px]">
      <div className='flex'>
        <div className="bg-white m-[14px] rounded-[100px]">
          <img
            className="w-[50px] h-[50px] object-cover rounded-[100px]"
            src={user.img}
            alt=""
          />
        </div>
        <div>
          <p className=''>{user.realname}</p>
          <p className=''>{user.email}</p>
        </div>
      </div>

      <h1 className="text-[20px] font-bold cursor-pointer">{title}</h1>
      <p className="leading-6 font-normal">{description.substring(0, 110)},...</p>
      <img className="w-full h-[280px] object-cover" src={img} alt="" />

    </div>
  );
};

export default PostComponent