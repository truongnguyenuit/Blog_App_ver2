import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import PostComponent from '../components/PostComponent';
import { BlogContext } from '../contexts/blogContext';
import { AuthContext } from '../contexts/authContext';
const MyBlogPage = () => {
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
    <div>
      <div className='flex flex-col justify-start items-center relative h-[543px]'>
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
              src={'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/89951423_785544915273554_2888235755597987840_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FBAcJvA4Te0AX-j8CDx&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_DoBsFrOnC3SXmvU-LA5ZrUQRNaxHBlP0RJZYHmGf-RA&oe=62FE19B6'}
              alt=""
            />
          </div>
          <div className="flex flex-col">
          <span className="">
            sadasd
          </span>
          <span className="">
           sadasd
          </span>
          </div>
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