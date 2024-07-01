import { useContext } from "react"
import { KEY_CONTEXT_USER } from "../../../../lib/context/use.reducer"
import ButtonComponent from "../../button/Button"
import './modalDelete.scss'
import UserContext from "../../../../lib/context/use.context"
import AppImages from "../../../../assets"
const ModalDeleteItem = () => {
    const [userCTX, dispatch] = useContext(UserContext)
    const onClickClone = () => {
        dispatch({
            type: KEY_CONTEXT_USER.HIDE_MODAL,
        })
    }
    return (
        <div className="modal-delete">
            <div className="iconClone">
                <i onClick={onClickClone} className="bx bx-x"></i>
            </div>
            <h1>{userCTX.titleModel ?? 'Thông báo'}</h1>
            <img className="icon" src={AppImages.deleteModal} alt="" />
            <label>
                {' '}
                {userCTX.contentModel ?? 'Bạn có đồng ý xóa mục này không ?'}
            </label>
            <div className="button">
                <div>
                    <ButtonComponent buttonAuth={false} title={'Hủy'} onClick={onClickClone} />
                </div>
                <div>
                    <ButtonComponent
                        buttonAuth={true}
                        title={'Đồng ý'}
                        onClick={() => {
                            userCTX.onClickConfirmModel(userCTX.dataModal)
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
export default ModalDeleteItem