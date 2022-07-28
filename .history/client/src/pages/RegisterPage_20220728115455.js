import React, { useState, useContext } from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

import { useFormik } from "formik"
const RegisterPage = () => {
  // Context
  const { registerUser } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    }
  })

  // const register = async event => {
  //   event.preventDefault()
  //   if (password !== confirmPassword) {
  //     alert('passwords do not match')
  //     return
  //   }
  //   try {
      
  //     const registerData = await registerUser(registerForm)
  //     console.log(registerData)
  //     alert(registerData.message)

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }
  console.log(formik.values)
  return (
    <div className='  mt-[120px] flex justify-center'>
      <div className="bg-white w-[475px] flex flex-col items-center gap-0.5 drop-shadow-lg p-8">
        <span className="text-[50px] font-semibold">
          BLOG
        </span>
        <span className="text-[20px] font-medium">
          Register for Blog
        </span>
        <span className="text-[13px] font-thin">
          Welcome to BLOG, please create account to write blog and use easily!
        </span>
        <div className="w-full h-[5px]" />
        <form onSubmit={''} className="flex flex-col gap-2 w-full">

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input
                  type="text"
                  placeholder="Username"
                  name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  required
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}
                />
              </Col>
            </div>
          </Row>

          

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}
                />
              </Col>
            </div>
          </Row>

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input.Password
                  placeholder="Confirm Password"
                  visibilityToggle={true}
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  required
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}
                />
              </Col>
            </div>
          </Row>

          <Row>
            <Col span={24}>
              <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Register
              </button>
            </Col>
          </Row>
          <div className="w-full h-[5px]" />
          <Row>
            <Col span={24}>
              <div className="w-full h-[1px] p-0 bg-gray-200 relative">
                <p className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-2 bg-white">
                  Login by
                </p>
              </div>
            </Col>
          </Row>
          <div className="w-full h-[5px]" />
          <Row>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-facebook-f text-blue-500"></i>
                <span className="px-2">Facebook</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-google text-red-500"></i>
                <span className="px-2">Google</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-github"></i>
                <span className="px-2">Github</span>
              </Button>
            </Col>
          </Row>

        </form>
      </div>

    </div>

  )
}

export default RegisterPage