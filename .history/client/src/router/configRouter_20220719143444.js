import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateNewPostPage from "../pages/CreateNewPostPage";
import Setting
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
    private: false,
  },
  {
    path: pathName.login,
    page: <LoginPage/>,
    private: false,
  },
  {
    path: pathName.register,
    page: <RegisterPage/>,
    private: false,
  },
  {
    path: pathName.createPost,
    page: <CreateNewPostPage />,
    private: false,
  },
  {
    path: pathName.setting,
    page
  }
]