import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className='bg-red-500  mt-[120px] flex justify-center'>
      <div className="bg-white w-[450px] flex flex-col items-center gap-2">
        <span className="text-[50px] font-bold m-0">
          BLOG
        </span>
        <span className="text-[20px] font-medium">
          Login To Post New Story
        </span>
        <form onSubmit={''} className="flex flex-col gap-3">

          <Row>
            <Col span={4} className="bg-stone-100 rounded-l-lg">
              <i className="fa-solid fa-user-large text-[20px] text-stone-500"></i>
            </Col>
            <Col span={20}>
              <Input
                placeholder="Email"
                style={{
                  height: 45,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col span={4}>
              <i className="fa-solid fa-lock text-[20px] text-stone-500"></i>
            </Col>
            <Col span={20}>
              <Input.Password
                placeholder="Password"
                visibilityToggle={true}
                style={{
                  height: 45,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 10,
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Login
              </button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full flex justify-between">
                <Link to={''}>Forgot Password?</Link>
                <Link to={pathName.register}>Create Account</Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full h-[1px] p-0 bg-gray-200 relative">
                <p className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-2 bg-white">
                  Login by
                </p>
              </div>
            </Col>
          </Row>

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

export default LoginPage