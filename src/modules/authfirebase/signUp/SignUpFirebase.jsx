import { useNavigate } from "react-router-dom"
import InputComponent from "../../components/input/Input"
import "./SignUpFirebase.scss"
import { useState } from "react"
import { ParseValid } from "../../../lib/validate/ParseValid"
import { Validate } from "../../../lib/validate/Validate"
import ButtonComponent from "../../components/button/Button"
import ToastApp from "../../../lib/notification/Toast"

const SignUpFirebase = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [configPw, setConfigPw] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [listError, setListError] = useState({
        email: '',
        password: '',
        configPw: '',
    });
    const [formValue, setFormValue] = useState({
        email: null,
        password: null,
        configPw: null,
    });

    const handlerOnChangeInput = (e) => {
        const { name, value } = e.target;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'configPw') setConfigPw(value);
        const inputValue = value.trim();
        const valid = e.target.getAttribute('validate');
        const validObject = ParseValid(valid);
        const error = Validate(name, inputValue, validObject, password);
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
        if (!email || !password || !configPw) {
            ToastApp.warning("Vui lòng nhập đủ trường thông tin!!")
            return
        }
        if (password !== configPw) {
            ToastApp.warning("Hai mật khẩu không khớp")
            return
        }

    }
    const handleNavLogin = () => {
        navigate('/login-firebase')
    }
    return (
        <div className="signUp-container">
            <div className="form-signUp">
                <h2 >Đăng ký</h2>
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
                <InputComponent
                    required={true}
                    label={"Nhập lại Mật khẩu"}
                    placeholder={'******'}
                    type={'password'}
                    validate={'required|checkPw'}
                    onChange={handlerOnChangeInput}
                    name={'configPw'}
                    value={configPw}
                    errorText={listError.configPw}
                />
                <div className="button-signUp">
                    <ButtonComponent
                        title={"Đăng nhập"}
                        disabledBtn={isButtonDisabled}
                        onClick={handleOnClick}
                    />
                </div>
                <div className="nav-signUp">
                    <label>Đã có tài khoản!!</label>
                    <h3 onClick={handleNavLogin}>Đăng nhập ngay</h3>
                </div>
            </div>

        </div>
    )
}
export default SignUpFirebase