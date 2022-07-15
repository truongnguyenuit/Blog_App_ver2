import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col } from "antd"

const NavigateRouter = [
  {
    path: "",
    name: "HOME",
  },
  // {
  //   path: "",
  //   name: "ABOUT",
  // },
  // {
  //   path: "",
  //   name: "CONTACT",
  // },
  // {
  //   path: "",
  //   name: "WRITE",
  // },
  // {
  //   path: "",
  //   name: "LOGOUT",
  // },
];
const array1 = [1, 4, 9, 16];

const NavbarComponent = () => {
  return (
    <div className="bg-white">
    <Row className="h-[50px]">
      <Col span={6}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="mx-1 text-[20px]">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
          </div>
          <div className="mx-1 text-[20px]">
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
          </div>
          <div className="mx-1 text-[20px]">
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
          <div className="mx-1 text-[20px]">
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>{" "}
          </div>
        </div>
      </Col>
      <Col span={12}>
        <nav className="w-full h-full">
          <ul className="flex justify-center items-center text-[18px] w-full h-full">
            {NavigateRouter.map((e, index) => {
              return (
                <li key={index} className="mx-2">
                  <Link
                    to={e.path}
                    className="text-stone-500 hover:text-stone-400"
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Col>
      <Col  span={6}>
        <div className="w-full h-full flex items-center justify-center">
          
            <Link to={pathName.login}>
              Login
            </Link>

          )
          
          <Link to={pathName.setting}>
            <img
              className="w-[40px] h-[40px] object-cover rounded-full"
              src={avatar}
              alt=""
            />
          </Link>
          )}
          <div className="mx-2 text-[20px]">
            <SearchComponent/>
          </div>
        </div>
      </Col>
    </Row>

    </div>
  );
  // return (
  //   <div className='bg-white'>
  //     <Row>

  //       <Col span={6}>
  //         <div className="flex justify-center items-center text-[20px] gap-1.5 h-full bg-sky-500">
  //           <i className="fa-brands fa-facebook-square cursor-pointer"></i>
  //           <i className="fa-brands fa-twitter-square cursor-pointer"></i>
  //           <i className="fa-brands fa-instagram-square cursor-pointer"></i>
  //           <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
  //           {NavigateRouter.map((item, index) => {

  //             <div key={index}>

  //               {item.name}

  //             </div>
  //           })}
  //         </div>
  //       </Col>

  //       <Col span={12}>
  //         {/* <nav className="bg-orange-500 w-full h-full">
  //           <ul className="">
  //             {NavigateRouter.map((item, index) => {
                
  //               <li key={index} className="">
                
  //                 <Link to={item.path} className="">
                    
  //                   {item.name}
  //                 </Link>
  //               </li>
  //             })}
  //           </ul>
  //         </nav> */}
  //         <nav>

  //           {NavigateRouter.map(x => {
  //             <p>
  //               truong
  //               {console.log(x.name)}
  //             </p>

  //           })}

  //           {/* {console.log(NavigateRouter.map(x => x.name))} */}
  //         </nav>

  //       </Col>

  //       <Col span={6}>
  //         <div className="bg-yellow-500">
  //           truong3
  //         </div>

  //       </Col>

  //     </Row>
  //   </div>
  // )
}

export default NavbarComponent