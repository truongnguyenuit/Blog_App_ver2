import { Button, Modal, Input } from 'antd';
import React, { useState, useContext } from 'react';
import { BlogContext } from '../contexts/blogContext';

const PostComponent = ({ atitle, adescription, aimg, user, time, a_id, page }) => {
  const {
    blogState: { post, posts, postsLoading },
    deleteBlog,
    updateBlog
  } = useContext(BlogContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const [blog, setBlog] = useState({
    title: atitle,
    description: adescription,
    img: aimg,
  })

  const { title, description, img, } = blog


  let modify
  if (page === "Myblog") {
    modify = (
      <div className='w-[173px] flex justify-end gap-2'>
        <i className="fa-solid fa-pen-to-square text-xl text-red-600 cursor-pointer" onClick={showModal1} ></i>
        <i className="fa-solid fa-xmark text-2xl text-red-600 cursor-pointer" onClick={showModal}></i>
      </div>
    )
  }
  const delBlog = async event => {
    try {
      const response = await deleteBlog(_id)
      alert(response)

    } catch (error) {
      console.log(error)
    }
    handleOk()
  }
  const upBlog = async event => {
    try {
      const response = await updateBlog(blog)
      alert(response)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[430px] mx-6 my-2 flex flex-col bg-white drop-shadow-md rounded-[8px] overflow-hidden">
      <div className='flex mt-[12px] ml-[12px] mr-[12px] '>
        <div className="bg-white rounded-[100px]">
          <img
            className="w-[50px] h-[50px] object-cover rounded-[100px]"
            src={user.img}
            alt=""
          />
        </div>
        <div className='flex flex-col justify-center ml-[10px] gap-1'>
          <p className='font-bold m-[0px]'>{user.realname}</p>
          <p className=''>{time}</p>
        </div>
        {modify}

      </div>
      <div className='mx-[12px]'>
        <h1 className="text-[17px] font-bold cursor-pointer">{title}</h1>
        <p className="leading-6 font-normal">{description.substring(0, 110)},...</p>
      </div>
      <img className="w-full h-[280px] object-cover" src={img} alt="" />
      <Modal title="Alert" visible={isModalVisible} onOk={delBlog} onCancel={handleCancel}>
        <p className='text-red-600'>Are you want to delete this blog?</p>
      </Modal>
      <Modal title="Update Blog" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
        <Input
          type="text"
          placeholder="Title"
          name='title'
          value={title}
          onChange={onChangeRegisterForm}
          required
          style={{
            height: 45,
            borderRadius: 5
          }}
        />
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default PostComponent