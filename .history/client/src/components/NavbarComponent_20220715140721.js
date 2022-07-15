import React from 'react'
import { Row, Col } from "antd"
const NavigateRouter = [
  {
    path: "",
    name: "HOME",
  },
  {
    path: "",
    name: "ABOUT",
  },
  {
    path: "",
    name: "CONTACT",
  },
  {
    path: "",
    name: "WRITE",
  },
  {
    path: "",
    name: "LOGOUT",
  },
];
const NavbarComponent = () => {
  return (
    <div>
      <Row>

        <Col span={6}>
          <div className="flex justify-center items-center text-[20px] gap h-7 bg-sky-500">
          <i class="fa-brands fa-facebook-square cursor-pointer"></i>
          <i class="fa-brands fa-twitter-square cursor-pointer"></i>
          <i class="fa-brands fa-instagram-square cursor-pointer"></i>
          <i class="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>

        <Col span={12}>
          <div className="bg-orange-500">
            truong2
          </div>
        </Col>

        <Col span={6}>
          <div className="bg-yellow-500">
            truong3
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarComponent