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
          <div className="collum1">
            truong1
          </div>
        </Col>

        <Col span={6}>
          <div className="collum2">
            truong2
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarComponent