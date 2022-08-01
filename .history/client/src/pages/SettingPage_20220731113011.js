import React, { useContext } from "react";
import { Row, Col } from "antd";
import AboutComponent from "../components/AboutComponent";
import { AuthContext } from "../contexts/authContext";

import { useFormik } from 'formik';
import * as Yup from "yup";

import { useSelector } from "react-redux";
const SettingPage = () => {
  const { authState: { user }, getUser, updateUser, changePassword } = useContext(AuthContext)

  const realname = useSelector((state)=> state.user.realname)

  const userFormik = useFormik({
    initialValues: {
      realname: user.realname,
      username: user.username,
      email: user.email,
      img: user.img
    },
    validationSchema: Yup.object({
      realname: Yup.string().required("Read name is required").min(4, "Must be 4 character or more"),
      username: Yup.string().required("User name is required").min(4, "Must be 4 character or more"),
      email: Yup.string().required("Email is required").min(4, "Must be 4 character or more"),
      img: Yup.string().required("Image is required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const updateData = await updateUser(values)
        alert(updateData)

      } catch (error) {
        console.log(error)
      }
    },
  })

  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required").min(4, "Must be 4 character or more"),
      newPassword: Yup.string().required("New password is required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Confirm password is required").min(4, "Must be 4 character or more")
    }),
    onSubmit: async (values) => {
      if (values.newPassword !== values.confirmPassword) {
        alert("Confirm password don't match password!")
        return
      }
      try {
        const updatePassword = await changePassword(values)
        alert(updatePassword)

      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="m-20 mt-[60px]">
      <Row>
        <Col span={19} >
          <div className="w-11/12">
            <div className="flex justify-between items-center">
              <p className="text-[30px] text-rose-500 ">Update Your Account</p>
              <p className="text-[12px] text-rose-500 cursor-pointer">
                Delete Account
              </p>
            </div>
            <div>
              <p className="text-[20px] font-serif">Profile Picture</p>
              <div className="flex items-center">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-[15px]"
                  src={userFormik.values.img}
                  alt=""
                />
                <label htmlFor="inputImg">
                  <i className="fa-solid fa-circle-user text-[30px] text-rose-500 mx-4"></i>
                  <input
                    id="inputImg"
                    className="hidden"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={''}
                  />
                </label>
              </div>

              <form onSubmit={userFormik.handleSubmit}>
                <div className="w-full my-4">
                  <p className="text-[20px] font-serif m-0">Real Name</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    placeholder="RealName"
                    type='text'

                    id="realname"
                    name='realname'
                    value={userFormik.values.realname}
                    onChange={userFormik.handleChange}

                  />
                  {userFormik.errors.realname && (
                    <p className='text-red-600 m-0'>{userFormik.errors.realname}</p>
                  )}

                </div>
                <div className="w-full my-4">
                  <p className="text-[20px] font-serif m-0">User Name</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    placeholder="Username"
                    type='text'

                    id='username'
                    name='username'
                    value={userFormik.values.username}
                    onChange={userFormik.handleChange}

                  />
                  {userFormik.errors.username && (
                    <p className='text-red-600 m-0'>{userFormik.errors.username}</p>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-[20px] font-serif m-0">Email</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    placeholder="Email"
                    type='text'

                    id='email'
                    name='email'
                    value={userFormik.values.email}
                    onChange={userFormik.handleChange}
                  />
                  {userFormik.errors.email && (
                    <p className='text-red-600 m-0'>{userFormik.errors.email}</p>
                  )}
                </div>


                <div className="w-full">
                  <p className="text-[20px] font-serif m-0">Img Link</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    placeholder="ImgLink"
                    type='text'

                    id='img'
                    name='img'
                    value={userFormik.values.img}
                    onChange={userFormik.handleChange}
                  />
                  {userFormik.errors.img && (
                    <p className='text-red-600 m-0'>{userFormik.errors.img}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 rounded-[10px]"
                  >
                    Update
                  </button>
                </div>
              </form>

              <form onSubmit={passwordFormik.handleSubmit}>
                <div className="">
                  <p className="text-[20px] font-serif m-0">Old Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="old password"

                    id='oldPassword'
                    name='oldPassword'
                    value={passwordFormik.values.oldPassword}
                    onChange={passwordFormik.handleChange}
                  />
                  {passwordFormik.errors.oldPassword && (
                    <p className='text-red-600 m-0'>{passwordFormik.errors.oldPassword}</p>
                  )}
                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">New Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="New password "

                    id="newPassword"
                    name='newPassword'
                    value={passwordFormik.values.newPassword}
                    onChange={passwordFormik.handleChange}

                  />
                  {passwordFormik.errors.newPassword && (
                    <p className='text-red-600 m-0'>{passwordFormik.errors.newPassword}</p>
                  )}
                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">
                    Confirm new password
                  </p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="Confirm password"

                    id="confirmPassword"
                    name='confirmPassword'
                    value={passwordFormik.values.confirmPassword}
                    onChange={passwordFormik.handleChange}
                  />
                  {passwordFormik.errors.confirmPassword && (
                    <p className='text-red-600 m-0'>{passwordFormik.errors.confirmPassword}</p>
                  )}
                </div>
                <div className="w-full flex justify-center mb-8">
                  <button type="submit" className="px-6 py-2 rounded-[10px] bg-blue-500 text-white">
                    Update Password
                  </button>
                </div>
              </form>

            </div>
          </div>
        </Col>
        <Col span={5}>
          <AboutComponent />
        </Col>
      </Row>
    </div>
  )
}

export default SettingPage