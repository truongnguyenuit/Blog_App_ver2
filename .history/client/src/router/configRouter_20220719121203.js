import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
  },
  {
    path: pathName.login,
    page: <LoginPage/>,
  },
  {
    path: pathName.register,
    page: <RegisterPage/>
  },
  {
    path: path.createPost
  }
]