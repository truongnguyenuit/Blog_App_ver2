import React from 'react'
import { Row, Col } from "antd";
const HomePage = () => {
  return (
    <div>
      <div className='flex flex-col justify-end items-center relative h-[543px]'>
        <span className="text-[20px] font-serif absolute top-9">
          React & Node
        </span>
        <span className="text-[100px] text-stone-600 font-serif absolute top-7">
          BLOG
        </span>
        <div className="w-full h-[450px]">
          <img 
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="" 
          className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="">
      <Row>
      <Col span ={16}>
        truong
      </Col>
      <Col span >

      </Col>

      </Row>

      </div>
    </div>
  )
}

export default HomePage