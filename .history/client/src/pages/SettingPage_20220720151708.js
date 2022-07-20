import React, { useContext } from "react";
import { Row, Col } from "antd";
import AboutComponent from "../components/AboutComponent";
import { AuthContext } from "../contexts/authContext";
const SettingPage = () => {
  const { loadUser } = useContext(AuthContext)

  const load = async event => {
    event.preventDefault()
    try {

      const loginData = await loginUser(loginForm)
      console.log(loginData)
      alert(loginData.message)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="m-20 mt-[60px]">
      <Row>
        <Col span={19} >
          <div className="w-11/12">
            <div className="flex justify-between items-center">
              <p className="text-[30px] text-rose-500 ">Update Your Account</p>
              <p className="text-[12px] text-rose-500 cursor-pointer">
                Delete Account
              </p>
            </div>
            <div>
              <p className="text-[20px] font-serif">Profile Picture</p>
              <div className="flex items-center">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-[15px]"
                  src={'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/89951423_785544915273554_2888235755597987840_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FBAcJvA4Te0AX-j8CDx&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_DoBsFrOnC3SXmvU-LA5ZrUQRNaxHBlP0RJZYHmGf-RA&oe=62FE19B6'}
                  alt=""
                />
                <label htmlFor="inputImg">
                  <i className="fa-solid fa-circle-user text-[30px] text-rose-500 mx-4"></i>
                  <input
                    id="inputImg"
                    className="hidden"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={''}
                  />
                </label>
              </div>
              <form onSubmit={''}>
                <div className="w-full my-4">
                  <p className="text-[20px] font-serif m-0">Username</p>
                  <input
                    className="w-full h-[33px] text-gray-500"

                    placeholder="Username"
                  />
                  <p className="p-0 m-0 ml-2 text-red-500">
                    {''}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-[20px] font-serif m-0">Email</p>
                  <input
                    className="w-full h-[33px] text-gray-500"

                    placeholder="Email"
                  />

                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 rounded-[10px]"
                  >
                    Update
                  </button>
                </div>
              </form>
              <form onSubmit={''}>
                <div className="">
                  <p className="text-[20px] font-serif m-0">Old Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="password"
                    placeholder="old password"

                  />

                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">New password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="password"
                    placeholder="New password "

                  />

                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">
                    Confirm new password
                  </p>
                  <input
                    className="w-full h-[33px] mt-4 text-gray-500"
                    type="password"
                    placeholder="Confirm password"

                  />

                </div>
                <div className="w-full flex justify-center mb-8">
                  <button className="px-6 py-2 rounded-[10px] bg-blue-500 text-white">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col span={5}>
          <AboutComponent />
        </Col>
      </Row>
    </div>
  )
}

export default SettingPage