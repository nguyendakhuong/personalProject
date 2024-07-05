export const KEY_LOCAL = {
  ROLE: "RL",
  LANGUAGE: "LG",
  TODO_LIST: "TD",
};

const getRoleStorage = () => {
  return localStorage.getItem(KEY_LOCAL.ROLE);
};

const setRoleStorage = (role) => {
  return localStorage.setItem(KEY_LOCAL.ROLE, role);
};

const getLanguageStorage = () => {
  return localStorage.getItem(KEY_LOCAL.LANGUAGE);
};

const setLanguageStorage = (language) => {
  return localStorage.setItem(KEY_LOCAL.LANGUAGE, language);
};

const getTodoList = () => {
  const todoList = localStorage.getItem(KEY_LOCAL.TODO_LIST);
  return todoList ? JSON.parse(todoList) : [];
};

const setTodoList = (list) => {
  return localStorage.setItem(KEY_LOCAL.TODO_LIST, JSON.stringify(list));
};

const APP_LOCAL = {
  getRoleStorage,
  setRoleStorage,
  getLanguageStorage,
  setLanguageStorage,
  getTodoList,
  setTodoList,
};

export default APP_LOCAL;
