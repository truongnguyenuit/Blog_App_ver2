import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import { BlogContext } from '../contexts/blogContext';
import PostComponent from '../components/PostComponent';
const MyBlogPage = () => {
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
    <div>
      <div className='flex flex-col justify-start items-center relative h-[543px]'>
        <span className="text-[20px] font-serif absolute top-9">
          React & Node
        </span>
        <span className="text-[100px] text-stone-600 font-serif absolute top-7">
          BLOG
        </span>
        <div className="w-full h-[450px]">
          <img
            src="https://3.bp.blogspot.com/-oe9oD3r4mqA/WVpJl7qfU7I/AAAAAAAAoaA/Sk4vBAEMc9Yee6YrO_XMta9NR-9Bxi3UwCLcBGAs/s1600/8a7e09d5f73dc4d0bad4e173e926d722.jpg"
            alt=""
            className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="m-7">
        <Row>
          <Col span={16}>
            <div className="flex flex-wrap">
              {posts.map((item, index) => {
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    description={item.description}
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

export default MyBlogPage