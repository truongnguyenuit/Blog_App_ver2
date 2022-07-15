import React from 'react'

const NavigateRouter = [
  {
    path: pathName.home,
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
    path: pathName.createBlog,
    name: "WRITE",
  },
  {
    path: pathName.logout,
    name: "LOGOUT",
  },
];
const NavbarComponent = () => {
  return (
    <div>NavbarComponent</div>
  )
}

export default NavbarComponent