import { createContext, useReducer, useState } from 'react'
import { blogReducer } from '../reducers/blogReducer'

import axios from 'axios'

export const blogContext = createContext()

const blogContextProvider = ({ children }) => {
	// State
	const [blogState, dispatch] = useReducer(blogReducer, {
		post: null,
		posts: [],
		postsLoading: true
	})

	// Get all posts
	const getPosts = async () => {
		try {
			const response = await axios.get(`${apiUrl}/posts`)
			if (response.data.success) {
				dispatch({ type: POSTS_LOADED_SUCCESS, payload: response.data.posts })
			}
		} catch (error) {
			dispatch({ type: POSTS_LOADED_FAIL })
		}
	}

	// Add post
	const addBlog = async newBlog => {
		try {
			const response = await axios.post(`http://localhost:5000/api/posts`, newBlog)
			if (response.data.success) {
				dispatch({ type: ADD_POST, payload: response.data.post })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Delete post
	const deletePost = async postId => {
		try {
			const response = await axios.delete(`${apiUrl}/posts/${postId}`)
			if (response.data.success)
				dispatch({ type: DELETE_POST, payload: postId })
		} catch (error) {
			console.log(error)
		}
	}

	// Find post when user is updating post
	const findPost = postId => {
		const post = postState.posts.find(post => post._id === postId)
		dispatch({ type: FIND_POST, payload: post })
	}

	// Update post
	const updatePost = async updatedPost => {
		try {
			const response = await axios.put(
				`${apiUrl}/posts/${updatedPost._id}`,
				updatedPost
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_POST, payload: response.data.post })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Post context data
	const postContextData = {
		addBlog
	}

	return (
		<blogContext.Provider value={postContextData}>
			{children}
		</blogContext.Provider>
	)
}

export default blogContextProvider
