import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "antd"
import { pathName } from '../router/pathName';

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
const array1 = [1, 4, 9, 16];

const NavbarComponent = () => {
  return (

    <div className="h-[50px]">
      <Row >

        <Col span={6}>
          <div className="flex justify-center items-center text-[20px] gap-1.5 h-full w-full bg-sky-500">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>

        <Col span={12}>
          <nav>
            <ul className="flex justify-center items-center text-[20px] gap-1.5 h-full w-full bg-yellow-500">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} className="text-stone-500 hover:text-stone-400">
                      {item.name}
                    </Link>
                  </li>
                );

              })}
            </ul>
          </nav>
        </Col>

        <Col span={6}>
          <div className="flex jbg-yellow-500">
            <Link to={pathName.login}>
              Login
            </Link>
            <Link to={pathName.register}>
              Register
            </Link>
          </div>
        </Col>

      </Row>
    </div>



  )
}

export default NavbarComponent