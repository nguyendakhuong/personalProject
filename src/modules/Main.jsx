import { useContext, useState } from "react";
import dataJson from "./../lib/data/index.json"
import "./Main.scss"
import UserContext from "../lib/context/use.context";
import { KEY_CONTEXT_USER } from "../lib/context/use.reducer";
import { useNavigate } from "react-router-dom";
import APP_LOCAL from "../lib/localStorage/localStorage";
import { type } from "@testing-library/user-event/dist/type";
const Main = () => {
    const [{ }, dispatch] = useContext(UserContext);
    const navigate = useNavigate();
    const routeMap = {
        '1': 'todo-list',
        '2': 'login-firebase'
    };
    const handlerItem = (role) => {
        APP_LOCAL.setRoleStorage(role)
        const route = routeMap[role]
        navigate(route);
    }
    return (
        <div className="container">
            {dataJson.map((v, i) => (
                <div key={i} className="item" onClick={() => { handlerItem(v.role) }}>
                    {v.name}
                </div>
            ))}
        </div>
    )
}

export default Main