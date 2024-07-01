import { useContext, useEffect } from "react";
import UserContext from "./lib/context/use.context";
import { useTranslation } from "react-i18next";
import APP_LOCAL from "./lib/localStorage/localStorage";
import { RouterProvider } from "react-router-dom";
import AppRoute from "./route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./modules/components/loading/Loading";
import Modal from "./modules/components/modal";

function App() {
  const [{ isOpenModal, language }, dispatch] = useContext(UserContext);
  const role = APP_LOCAL.getRoleStorage();
  const [t, i18n] = useTranslation();
  console.log(role);
  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <div>
      <RouterProvider router={AppRoute(role)} />
      <ToastContainer />
      <Loading />
      {isOpenModal && <Modal />}
    </div>
  );
}

export default App;
