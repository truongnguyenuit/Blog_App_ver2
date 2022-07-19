import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/authContext';
const LogoutPage = () => {
  //Context
  const { loginUser } = useContext(AuthContext)

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const { username, password } = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  const login = async event => {
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
    <div className='  mt-[120px] flex justify-center'>
      <div className="bg-white w-[450px] flex flex-col items-center gap-0.5 drop-shadow-lg p-8">


        <span className="text-[20px] font-semibold">
          Confirm to logout Blog!
        </span>
        <div className="w-full h-[15px]" />
        <Row>
          <Col span={24}>
            <button
              type="submit"
              className="bg-blue-500 w-[400px] h-[45px] text-white rounded-[10px]"
            >
              Logout
            </button>
          </Col>
        </Row>


      </div>

    </div>
  )
}

export default LogoutPage