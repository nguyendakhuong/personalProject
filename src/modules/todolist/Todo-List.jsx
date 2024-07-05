import { useContext, useEffect, useState } from 'react'
import ButtonComponent from '../components/button/Button'
import InputComponent from '../components/input/Input'
import './Todo-List.scss'
import APP_LOCAL from '../../lib/localStorage/localStorage'
import UserContext from '../../lib/context/use.context'
import { KEY_CONTEXT_USER } from '../../lib/context/use.reducer'
import { TYPE_MODEL } from '../components/modal'
import ToastApp from '../../lib/notification/Toast'
import { type } from '@testing-library/user-event/dist/type'

const checkString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
};

const TodoList = () => {
    const [{ }, dispatch] = useContext(UserContext);
    const [valueTodo, setValueTodo] = useState("")
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const storedTodo = APP_LOCAL.getTodoList();
        setTodoList(storedTodo);
    }, []);

    useEffect(() => {
        APP_LOCAL.setTodoList(todoList)
    }, [todoList]);

    const handleInputTodo = (e) => {
        setValueTodo(e.target.value);
    }
    const handleButtonTodo = () => {
        if (valueTodo.trim()) {
            setTodoList([...todoList, valueTodo.trim()]);
            setValueTodo("");
        }
    }
    const handleDeleteTodo = (value, index) => {
        dispatch({
            type: KEY_CONTEXT_USER.SHOW_MODAL,
            payload: {
                typeModal: 'DELETE_ITEM',
                contentModel: `Bạn muốn xóa công việc ${value} này không ?`,
                typeModal: TYPE_MODEL.DELETE_ITEM,
                onClickConfirmModel: async () => {
                    try {
                        const newTodoList = todoList.filter((_, i) => i !== index);
                        setTodoList(newTodoList);
                        ToastApp.success('Cập nhật thành công!')
                    } catch (e) {
                        ToastApp.error("Thất bại")
                        return console.log(e)
                    }
                }
            }
        })
    }
    const handleEditTodo = (value, index) => {
        dispatch({
            type: KEY_CONTEXT_USER.SHOW_MODAL,
            payload: {
                typeModal: 'EDIT',
                contentModel: value,
                typeModal: TYPE_MODEL.EDIT,
                onClickConfirmModel: async (updatedValue) => {
                    try {
                        const newTodoList = todoList.map((todo, i) => i === index ? updatedValue : todo);
                        setTodoList(newTodoList);
                        ToastApp.success('Sửa thành công!')
                    } catch (e) {
                        ToastApp.error("Thất bại")
                        return console.log(e)
                    }
                }
            }
        })
    }
    const handleItem = (value) => {
        dispatch({
            type: KEY_CONTEXT_USER.SHOW_MODAL,
            payload: {
                typeModal: 'DETAILS',
                contentModel: `Công việc: ${value}!`,
                titleModel: "Chi tiết công việc"
            }
        })
    }
    return (
        <div className='todo-container'>
            <h1>Todo List</h1>
            <div className='input'>
                <InputComponent placeholder={"Công việc..."} onChange={handleInputTodo} name={"todo"} type={"text"} value={valueTodo} />
                <ButtonComponent title={"Lưu"} onClick={handleButtonTodo} />
            </div>
            <div className='todo-list'>
                {todoList.length > 0 ? todoList.map((todo, index) => (
                    <div key={index} className='todo-item'>
                        <span onClick={() => { handleItem(todo) }}>{checkString(todo, 30)}</span>
                        <button onClick={() => handleDeleteTodo(todo, index)}>Xóa</button>
                        <button onClick={() => handleEditTodo(todo, index)}>sửa</button>
                    </div>
                )) : "Bạn chưa tạo công việc nào!"}
            </div>
        </div>
    )
}
export default TodoList