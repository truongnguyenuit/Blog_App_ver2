import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { BlogContext } from "../contexts/blogContext";

import { useFormik } from "formik"
import * as Yup from "yup"

const CreateNewPostPage = () => {
  const { addBlog } = useContext(BlogContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      img: "",
      user: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      description: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      img: Yup.string().required("Required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      console.log("handle supmit")
      try {
        const response = await addBlog(values)
        alert(response.message)
        console.log(response)

      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="pr-[60px] pl-[150px] pt-[50px]">
      <div className="w-[1075px] h-[300px] mb-4">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={"https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg"
          }
          alt=""
        />
      </div>
      <form onSubmit={formik.handleSubmit}>

        <Row className="h-[50px]">

          <Col className=" m-auto text-center" span={1}>
            <label htmlFor="inputImg">
              <i className="fa-solid fa-circle-plus text-[27px] cursor-pointer text-blue-500"></i>
              <input
                id="inputImg"
                className="hidden"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={''}
              />
            </label>
          </Col>

          <Col className="" span={17}>
            <input
              className="w-full h-full p-2.5 text-[30px] font-normal  focus:outline-none border-2 border-black rounded-[10px]"
              type="text"
              placeholder="Title"

              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            
          </Col>

          <Col className="" span={6}>
            <div className="w-full h-full flex justify-start ml-1">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-[18px] rounded-[10px]"

              >
                Publish
              </button>
            </div>
          </Col>

        </Row>

        <Row className="mt-5">
          <Col span={24}>
            <input
              className="w-[1075px] h-full p-2.5 text-[18px] font-normal  focus:outline-none border-2 border-black rounded-[10px]"
              type="text"
              placeholder="Image Link"

              id="img"
              name="img"
              value={formik.values.img}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>

        <div>
          <textarea
            className=" mt-[13px] p-2.5 text-[18px] focus:outline-none border-2 border-black rounded-[10px]"

            rows="10"
            cols="115"
            placeholder="Tell your story ..."

            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
        </div>

      </form>
    </div>
  )
}

export default CreateNewPostPage