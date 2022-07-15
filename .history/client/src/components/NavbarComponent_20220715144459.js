import React from 'react'
import { Link } from "react-router-dom"
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
          <div className="flex justify-center items-center text-[20px] gap-1.5 h-full bg-sky-500">
            <i class="fa-brands fa-facebook-square cursor-pointer"></i>
            <i class="fa-brands fa-twitter-square cursor-pointer"></i>
            <i class="fa-brands fa-instagram-square cursor-pointer"></i>
            <i class="fa-brands fa-pinterest-square cursor-pointer"></i>
            {NavigateRouter.map((item, index) => {
          
                <div key={index}>
 
                    {item.name}
                  
                </div>
              })}
          </div>
        </Col>

        <Col span={12}>
          <nav className="bg-orange-500 w-full h-full">
            <ul className="">
              {NavigateRouter.map((item, index) => {
                
                <li key={index} className="">
                
                  <Link to={item.path} className="">
                    
                    {item.name}
                  </Link>
                </li>
              })}
            </ul>
          </nav>
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