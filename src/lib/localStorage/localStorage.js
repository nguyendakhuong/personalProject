export const KEY_LOCAL = {
  ROLE: "RL",
  LANGUAGE: "LG",
  TODO_LIST: "TDL",
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
  return localStorage.getItem(KEY_LOCAL.TODO_LIST);
};

const setTodoList = (list) => {
  return localStorage.setItem(KEY_LOCAL.TODO_LIST, list);
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
