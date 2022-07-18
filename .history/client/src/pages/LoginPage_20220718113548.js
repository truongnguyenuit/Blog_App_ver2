import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className='bg-red-500  mt-[120px] flex justify-center'>
      <div className="bg-blue-500 w-[450px] flex flex-col items-center">
        <span>
          BLOG
        </span>
        <span className="s">
          Login To Post New Story
        </span>
        <form onSubmit={''}>
          <Row>
            <Col span={4}>
              <i className="fa-solid fa-user-large text-[20px] text-stone-500"></i>

            </Col>
            <Col span={20}>
              <Input
                placeholder="Email"
                style={{
                  height: 45,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
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
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              />

            </Col>
          </Row>
        </form>
      </div>

    </div>
  )
}

export default LoginPage