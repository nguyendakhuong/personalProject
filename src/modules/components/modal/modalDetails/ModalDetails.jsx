import { useContext } from 'react'
import UserContext from '../../../../lib/context/use.context'
import './modalDetails.scss'
import { KEY_CONTEXT_USER } from '../../../../lib/context/use.reducer'
import ButtonComponent from '../../button/Button'
import AppImages from '../../../../assets'
const ModalDetails = () => {
    const [userCTX, dispatch] = useContext(UserContext)
    const onClickClone = () => {
        dispatch({
            type: KEY_CONTEXT_USER.HIDE_MODAL,
        })
    }
    return (
        <div className='modal-details'>
            <div className="iconClone">
                <i onClick={onClickClone} className="bx bx-x"></i>
            </div>
            <h1>{userCTX.titleModel ?? 'Chi tiết mục'}</h1>
            <img className="icon" src={AppImages.deleteModal} alt="" />
            <label>
                {' '}
                {userCTX.contentModel}
            </label>
            <div>
                <ButtonComponent buttonAuth={false} title={'OK'} onClick={onClickClone} />
            </div>

        </div>
    )
}
export default ModalDetails