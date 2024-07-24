import { createBrowserRouter } from "react-router-dom";
import Main from "../modules/Main";
import TodoList from "../modules/todolist/Todo-List";
import LoginFirebase from "../modules/authfirebase/login/LoginAuthFirebase";
import SignUpFirebase from "../modules/authfirebase/signUp/SignUpFirebase";

const AppRoute = (role) => {
  const route = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/todo-list",
      element: <TodoList />,
    },
    {
      path: "/login-firebase",
      element: <LoginFirebase />,
    },
    {
      path: "/signup-firebase",
      element: <SignUpFirebase />,
    },
  ];
  return createBrowserRouter(route);
};
export default AppRoute;
