import React from 'react'

const PostComponent = ({ title, description, img, user, time }) => {
  return (
    <div className="w-[430px] mx-6 my-2 flex flex-col items-center bg-white drop-shadow-md ">
    <div className="bg-white p-1 rounded-[100px]">
            <img
              className="w-[170px] h-[170px] object-cover rounded-[100px]"
              src={user.img}
              alt=""
            />
          </div>
      <p>{user.realname}</p>
      <h1 className="text-[20px] font-bold cursor-pointer">{title}</h1>
      <p className="leading-6 font-normal">{description.substring(0, 110)},...</p>
      <img className="w-full h-[280px] object-cover" src={img} alt="" />

    </div>
  );
};

export default PostComponent