import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import AboutComponent from "../components/AboutComponent";
import { AuthContext } from "../contexts/authContext";

import { Formik, useFormik } from 'formik';
import * as Yup from "yup";

const SettingPage = () => {
  const { authState: { user }, getUser, updateUser, changePassword } = useContext(AuthContext)

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
      oldPassword: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      newPassword: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Required").min(4, "Must be 4 character or more")
    }),
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Confirm password don't match password!")
        return
      }
      try {
        const updatePassword = await changePassword(user)
        alert(updatePassword)

      } catch (error) {
        console.log(error)
      }
    }
  })
  // const passwordFormik = useFormik({
  //   initialValues
  // })
  console.log("settingpage", userFormik.values)
  // const [user, setUser] = useState({
  //   realname: '',
  //   username: '',
  //   email: '',
  //   img: '',
  //   oldPassword: '',
  //   newPassword: '',
  //   confirmPassword: '',
  // })

  // const { realname, username, email, img, oldPassword, newPassword, confirmPassword } = user

  // const onChangeUser = event =>
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value
  //   })

  // const load = async event => {

  //   try {
  //     const loadData = await getUser()
  //     console.log("data load dc:", loadData)
  //     setUser({
  //       realname: loadData.realname,
  //       username: loadData.username,
  //       email: loadData.email,
  //       img: loadData.img
  //     })

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const update = async event => {
  //   try {
  //     const updateData = await updateUser(user)
  //     setUser({
  //       realname: updateData.realname,
  //       username: updateData.username,
  //       email: updateData.email
  //     })

  //     alert(updateData)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const ChangePassword = async event => {
  //   try {
  //     const updatePassword = await changePassword(user)
  //     alert(updatePassword)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   load()
  // }, [])

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

              <form onSubmit={ChangePassword}>
                <div className="">
                  <p className="text-[20px] font-serif m-0">Old Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="old password"
                    name='oldPassword'
                    value={oldPassword}
                    onChange={onChangeUser}
                  />
                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">New Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="New password "
                    name='newPassword'
                    value={newPassword}
                    onChange={onChangeUser}

                  />
                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">
                    Confirm new password
                  </p>
                  <input

                    className="w-full h-[33px] text-gray-500"
                    type="text"
                    placeholder="Confirm password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={onChangeUser}
                  />
                </div>
                <div className="w-full flex justify-center mb-8">
                  <button className="px-6 py-2 rounded-[10px] bg-blue-500 text-white">
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