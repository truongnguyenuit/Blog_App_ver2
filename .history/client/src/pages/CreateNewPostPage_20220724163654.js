import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { BlogContext } from "../contexts/blogContext";

const CreateNewPostPage = () => {
  const { addBlog } = useContext(BlogContext)
  const [blog,setBlog] = useState({
    title: '',
    description: '', 
    user:''
  })
   
  const { title, description, user } = blog

  const onChangeBlog = event => {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value
    })
  }
   
  const createBlog = async event => {
    try {
    const response = await addBlog(blog)
    alert(response.message)
    console.log(response)
    
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="pr-[60px] pl-[150px] pt-[50px]">
      <div className="w-[1075px] h-[250px] mb-4">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={ "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
          alt=""
        />
      </div>
      <div className="">
        <Row className="h-[50px]">
          <Col className=" m-auto text-center" span={1}>
            <label htmlFor="inputImg">
              <i className="fa-solid fa-circle-plus text-[27px] cursor-pointer text-blue-500"></i>
              <input
                id="inputImg"
                className="hidden"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={''}
              />
            </label>
          </Col>
          <Col className="" span={17}>
            <input
              className="w-full h-full p-2.5 text-[30px] font-normal  focus:outline-none border-2 border-black rounded-[10px]"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChangeBlog}
            />
          </Col>
          <Col className="" span={6}>
            <div className="w-full h-full flex justify-start ml-1">
              <button
                className="px-4 py-2 bg-blue-500 text-white text-[18px] rounded-[10px]"
                onClick={createBlog}
              >
                Publish
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>

          </Col>
        </Row>
      </div>
      <div>
        <textarea
          className=" mt-[20px] p-2.5 text-[18px] focus:outline-none border-2 border-black rounded-[10px]"
          
          rows="10"
          cols="115"
          placeholder="Tell your story ..."
          name="description"
          value={description}
          onChange={onChangeBlog}
        ></textarea>
      </div>
    </div>
  )
}

export default CreateNewPostPage