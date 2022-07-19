import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateNewPostPage from "../pages/CreateNewPostPage";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
    private
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
    path: pathName.createPost,
    page: <CreateNewPostPage />
  }
]