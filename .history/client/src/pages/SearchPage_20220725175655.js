import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import PostComponent from '../components/PostComponent';
import { BlogContext } from '../contexts/blogContext';
import { AuthContext } from '../contexts/authContext';
const SearchPage = () => {
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
    <div>SearchPage</div>
  )
}

export default SearchPage