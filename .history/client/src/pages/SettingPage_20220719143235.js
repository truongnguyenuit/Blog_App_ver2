import React, { useState } from "react";
import { Row, Col } from "antd";
import AboutComponent from "../components/AboutComponent";

const SettingPage = () => {
  return (
    <div className="mx-4 mt-[60px]">
      <Row>
        <Col span={17}>
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
                className="w-[70px] h-[70px] object-cover rounded-[20px]"
                src={''}
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
            <form onSubmit={''}>
              <div className="w-full my-4">
                <p className="text-[20px] font-serif m-0">Username</p>
                <input
                  className="w-full h-[33px] text-gray-500"
                  
                  placeholder="Username"
                />
                <p className="p-0 m-0 ml-2 text-red-500">
                  {''}
                </p>
              </div>
              <div className="w-full">
                <p className="text-[20px] font-serif m-0">Email</p>
                <input
                  className="w-full h-[33px] text-gray-500"
                  {...register1("email")}
                  placeholder="Email"
                />
                
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-800 text-white px-8 py-2 rounded-[10px]"
                >
                  Update
                </button>
              </div>
            </form>
            <form onSubmit={handleSubmit2(handleChangePassword)}>
              <div className="">
                <p className="text-[20px] font-serif m-0">Old Password</p>
                <input
                  className="w-full h-[33px] text-gray-500"
                  type="password"
                  placeholder="old password"
                  {...register2("old_password")}
                />
                
              </div>
              <div>
                <p className="text-[20px] font-serif m-0">New password</p>
                <input
                  className="w-full h-[33px] text-gray-500"
                  type="password"
                  placeholder="New password "
                  {...register2("new_password")}
                />
                <p className="p-0 m-0 ml-2 text-red-500">
                  {errors2.new_password?.message}
                </p>
              </div>
              <div>
                <p className="text-[20px] font-serif m-0">
                  Confirm new password
                </p>
                <input
                  className="w-full h-[33px] mt-4 text-gray-500"
                  type="password"
                  placeholder="Confirm password"
                  {...register2("confirm_new_password")}
                />
                <p className="p-0 m-0 ml-2 text-red-500">
                  {errors2.confirm_new_password?.message}
                </p>
              </div>
              <div className="w-full flex justify-center mb-8">
                <button className="px-6 py-2 rounded-[10px] bg-green-800 text-white">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </Col>
        <Col span={7}>
          <AboutComponent />
        </Col>
      </Row>
    </div>
  )
}

export default SettingPage