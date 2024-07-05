import { useContext } from "react";
import UserContext from "../../../lib/context/use.context";
import { KEY_CONTEXT_USER } from "../../../lib/context/use.reducer";
import "./modal.scss";
import ModalDeleteItem from "./modalDelete/modalDelete";
import ModalDetails from "./modalDetails/ModalDetails";
import ModalEdit from "./modalEdit/ModalEdit";

export const TYPE_MODEL = {
  DELETE_ITEM: "DELETE_ITEM",
  DETAILS: "DETAILS",
  EDIT: "EDIT",
};
const Modal = () => {
  const [{ isOpenModal, dataModal, typeModal }, dispatch] =
    useContext(UserContext);

  return (
    <div
      id="modal"
      className="modal"
      onClick={(e) => {
        if (e.target.id === "modal")
          dispatch({ type: KEY_CONTEXT_USER.HIDE_MODAL });
      }}
    >
      <div className="show-modal">
        {typeModal === TYPE_MODEL.DELETE_ITEM && <ModalDeleteItem />}
        {typeModal === TYPE_MODEL.DETAILS && <ModalDetails />}
        {typeModal === TYPE_MODEL.EDIT && <ModalEdit />}
      </div>
    </div>
  );
};
export default Modal;
