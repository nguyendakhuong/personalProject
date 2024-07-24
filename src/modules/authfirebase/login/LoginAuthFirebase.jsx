import { useState } from "react"
import InputComponent from "../../components/input/Input"
import "./LoginFirebase.scss"
import { ParseValid } from "../../../lib/validate/ParseValid"
import { Validate } from "../../../lib/validate/Validate"
import ButtonComponent from "../../components/button/Button"
import AppImages from "../../../assets"
import { useNavigate } from "react-router-dom"

const LoginFirebase = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [listError, setListError] = useState({
        email: '',
        password: '',
    });
    const [formValue, setFormValue] = useState({
        email: null,
        password: null,
    });

    const handlerOnChangeInput = (e) => {
        const { name, value } = e.target;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        const inputValue = value.trim();
        const valid = e.target.getAttribute('validate');
        const validObject = ParseValid(valid);
        const error = Validate(name, inputValue, validObject);
        const newListError = { ...listError, [name]: error };
        setListError(newListError);
        setFormValue({ ...formValue, [name]: inputValue });

        if (Object.values(newListError).some(i => i)) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }
    const handleOnClick = () => {

    }
    const handleNavSignUp = () => {
        navigate('/signup-firebase')
    }

    return (
        <div className="login-container">
            <div className="form-login">
                <h2 >Đăng nhập</h2>
                <InputComponent
                    required={true}
                    label={'Email'}
                    placeholder={"Nhập ..."}
                    validate={'required|regEmail'}
                    onChange={handlerOnChangeInput}
                    name={'email'}
                    value={email}
                    errorText={listError.email}
                    type={'text'}
                />
                <InputComponent
                    required={true}
                    label={"Mật khẩu"}
                    placeholder={'******'}
                    type={'password'}
                    validate={'required'}
                    onChange={handlerOnChangeInput}
                    name={'password'}
                    value={password}
                    errorText={listError.password}
                />
                <div className="button-login">
                    <ButtonComponent
                        title={"Đăng nhập"}
                        disabledBtn={isButtonDisabled}
                        onClick={handleOnClick}
                    />
                </div>
                <div className="nav-login">
                    <label>Tạo tài khoản!!</label>
                    <h3 onClick={handleNavSignUp}>Đăng ký ngay</h3>
                </div>
            </div>

        </div>
    )
}
export default LoginFirebase