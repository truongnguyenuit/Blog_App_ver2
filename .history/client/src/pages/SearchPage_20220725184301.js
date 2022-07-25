import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Input } from "antd";
import AboutComponent from '../components/AboutComponent';
import PostComponent from '../components/PostComponent';
import { BlogContext } from '../contexts/blogContext';
import { AuthContext } from '../contexts/authContext';
const SearchPage = () => {
  const [title, setTitle] = useState('')

  const onChangeTitle = event => {
    setTitle({
      ...title,
      [event.target.name]: event.target.value
    })
  }

  const register = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      
      const registerData = await registerUser(registerForm)
      console.log(registerData)
      alert(registerData.message)

    } catch (error) {
      console.log(error)
    }

  }

  const {
    authState: { user }
  } = useContext(AuthContext)
  const {
    blogState: { post, posts, postsLoading },
    getBlogs
  } = useContext(BlogContext)

  if (postsLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }
 

  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col justify-start items-center relative h-[503px] bg-white drop-shadow-md'>
        <span className="text-[20px] font-serif absolute top-9">
          React & Node
        </span>
        <span className="text-[100px] text-stone-600 font-serif absolute top-7">
          BLOG
        </span>
        <div className="w-full h-[350px]">
          <img
            src="https://3.bp.blogspot.com/-oe9oD3r4mqA/WVpJl7qfU7I/AAAAAAAAoaA/Sk4vBAEMc9Yee6YrO_XMta9NR-9Bxi3UwCLcBGAs/s1600/8a7e09d5f73dc4d0bad4e173e926d722.jpg"
            alt=""
            className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center absolute top-60 left-28 mt-16">
          <div className="bg-white p-1 rounded-[100px]">
            <img
              className="w-[170px] h-[170px] object-cover rounded-[100px]"
              src={user.img}
              alt=""
            />
          </div>
          <div className="flex flex-col ml-3.5 gap-1">
          <span className="font-bold text-3xl">
            {user.realname}
          </span>
          <span className="text-lg">
            {user.email}
          </span>
          </div>
        </div>
        <Input
            type="text"
            placeholder="Title"
            name='title'
            value={title}
            onChange={onChangeTitle}
            required
            style={{
              height: 45,
              width: 500,
              borderRadius: 50
            }}
          />
      </div>
      <div className="m-7">
        <Row>
          <Col span={16}>
            <div className="flex flex-wrap">
              
              {posts.map((item, index) => {
                return (
                  <PostComponent
                    key={index}
                    atitle={item.title}
                    adescription={item.description}
                    aimg={item.img}
                    user={item.user}
                    time={item.createAt}
                    a_id={item._id}
                    page={"Myblog"}
                  />
                );
              })
              }

            </div>
          </Col>
          <Col span={8}>
            <AboutComponent />
          </Col>

        </Row>

      </div>
    </div>
  )
}

export default SearchPage