import { Button, Modal, Input } from 'antd';
import React, { useState, useContext } from 'react';
import { BlogContext } from '../contexts/blogContext';

import { useFormik } from 'formik';
import * as Yup from "yup";

const PostComponent = ({ atitle, adescription, aimg, user, time, a_id, page }) => {
  const {
    blogState,
    deleteBlog,
    updateBlog
  } = useContext(BlogContext)

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = () => {
    setIsDeleteModalVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showUpdateModal = () => {
    setIsUpdateModalVisible(true);
  };
  const handleUpdateOk = () => {
    setIsUpdateModalVisible(false);
  };
  const handleUpdateCancel = () => {
    setIsUpdateModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      title: atitle,
      description: adescription,
      img: aimg,
      _id: a_id
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Read name is required").min(4, "Must be 4 character or more"),
      description: Yup.string().required("User name is required").min(4, "Must be 4 character or more"),
      img: Yup.string().required("Email is required").min(4, "Must be 4 character or more"),
      _id: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await updateBlog(values)
        alert(response)
        console.log(response)

      } catch (error) {
        console.log(error)
      }
      handleUpdateOk()
    }
  })

  const [blog, setBlog] = useState({
    title: atitle,
    description: adescription,
    img: aimg,
    _id: a_id
  })

  const { title, description, img, _id } = blog

  const onChangeBlog = event => {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value
    })
  }



  const delBlog = async event => {
    try {
      const response = await deleteBlog(formik.values._id)
      alert(response)

    } catch (error) {
      console.log(error)
    }
    handleDeleteOk()
  }

  const upBlog = async event => {
    try {
      const response = await updateBlog(blog)
      alert(response)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
    handleUpdateOk()
  }

  let modify
  if (page === "Myblog") {
    modify = (
      <div className='w-[173px] flex justify-end gap-2'>
        <i className="fa-solid fa-pen-to-square text-xl text-red-600 cursor-pointer" onClick={showUpdateModal} ></i>
        <i className="fa-solid fa-xmark text-2xl text-red-600 cursor-pointer" onClick={showDeleteModal}></i>
      </div>
    )
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

      <Modal title="Alert" visible={isDeleteModalVisible} onOk={delBlog} onCancel={handleDeleteCancel}>
        <p className='text-red-600'>Are you want to delete this blog?</p>
      </Modal>

      <Modal title="Update Blog" visible={isUpdateModalVisible} onOk={upBlog} onCancel={handleUpdateCancel}>
        <div className='flex flex-col gap-2'>
          <Input
            type="text"
            placeholder="Title"

            id="title"
            name='title'
            value={formik.values.title}
            onChange={onChangeBlog}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <Input
            type="text"
            placeholder="Description"

            id="description"
            name='description'
            value={formik.values.description}
            onChange={onChangeBlog}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <Input
            type="text"
            placeholder="Title"

            id="img"
            name='img'
            value={}
            onChange={onChangeBlog}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <img className="w-full h-[280px] object-cover" src={img} alt="" />
        </div>
      </Modal>

    </div>
  );
};

export default PostComponent