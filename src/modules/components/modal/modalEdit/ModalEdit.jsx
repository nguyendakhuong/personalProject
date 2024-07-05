import { useContext, useState } from "react"
import { KEY_CONTEXT_USER } from "../../../../lib/context/use.reducer"
import ButtonComponent from "../../button/Button"
import './ModalEdit.scss'
import UserContext from "../../../../lib/context/use.context"
import AppImages from "../../../../assets"
import InputComponent from "../../input/Input"
const ModalEdit = () => {
    const [userCTX, dispatch] = useContext(UserContext)
    const [inputValue, setInputValue] = useState(userCTX.contentModel);
    const onClickClone = () => {
        dispatch({
            type: KEY_CONTEXT_USER.HIDE_MODAL,
        })
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className="modal-edit">
            <div className="iconClone">
                <i onClick={onClickClone} className="bx bx-x"></i>
            </div>
            <h1>{userCTX.titleModel ?? 'Thông báo'}</h1>
            <img className="icon" src={AppImages.deleteModal} alt="" />
            <InputComponent value={inputValue} onChange={handleInputChange} />
            <div className="button">
                <div>
                    <ButtonComponent buttonAuth={false} title={'Hủy'} onClick={onClickClone} />
                </div>
                <div>
                    <ButtonComponent
                        buttonAuth={true}
                        title={'Đồng ý'}
                        onClick={() => {
                            userCTX.onClickConfirmModel(inputValue)
                            dispatch({
                                type: KEY_CONTEXT_USER.HIDE_MODAL,
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default ModalEdit