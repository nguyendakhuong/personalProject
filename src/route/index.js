import { createBrowserRouter } from "react-router-dom";
import Main from "../modules/Main";
import TodoList from "../modules/todolist/Todo-List";

const AppRoute = (role) => {
  const route = [
    {
      path: "/",
      element: <Main />,
    },
    role === "1" && {
      path: "/todo-list",
      element: <TodoList />,
    },
  ];
  return createBrowserRouter(route);
};
export default AppRoute;
