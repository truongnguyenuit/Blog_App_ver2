const { verify } = require('argon2')
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')

// @route GET Post api/post
// @desc Create post
// @access Private
  
router.get('/', verifyToken, async (req, res) => {

  try {
    const posts = await Post.find({ user: req.userId }).populate('user', ['username'])
    res.json({ success: true, posts })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
  
})

// @route Post api/post
// @desc Create post
// @access Private

router.post('/', verifyToken, async (req, res) => {
  const { title, description } = req.body

  // Simple validation
  if (!title)
    return res.status(400).json({ success: false, message: 'Title Is Required' })
  try {
    const newPost = new Post({
      title: title,
      description: description,
      user: req.userId
    })

    await newPost.save()

    res.json({ success: true, message: 'Create Blog Successful!!!', post: newPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

// @route Put api/post
// @desc Update post
// @access Private

router.put('/:id', verifyToken, async (req, res) => {
  const { title, description } = req.body
  // Simple validation
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: 'Title Is Required' })
  try {
    let updatedPost = {
      title: title,
      description: description,
    }
    const postUpdateContidion = { _id: req.params.id, user: req.userId }

    updatedPost = await Post.findByIdAndUpdate(
      postUpdateContidion,
      updatedPost,
      { new: true }
      )

    // User not authorised to update post

    if (!updatedPost)  
    return res
      .status(401)
      .json({
        success: false,
        message: 'Post Not Found Of User Not Authorized'
      })

      res.json({ success: true, message: 'Excellent Progress!', post: updatedPost })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

// @route DELETE api/post
// @desc DELETE post
// @access Private

router.delete('/:id', verifyToken, async(req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id, user: req.userId }
    const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

    if (!deletedPost)
      return res.status(401).json({
        success: false,
        message: 'Post not found or user not authorised'
      })

      res.json({success: true, post:  deletedPost})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })

  }
})

module.exports = router