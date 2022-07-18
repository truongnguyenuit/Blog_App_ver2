import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
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
            <Col>

            </Col>
          </Row>
        </form>
      </div>
      
    </div>
  )
}

export default LoginPage