import { useContext, useEffect, useState } from "react";
import UserContext from "./lib/context/use.context";
import { useTranslation } from "react-i18next";
import APP_LOCAL from "./lib/localStorage/localStorage";
import { RouterProvider } from "react-router-dom";
import AppRoute from "./route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./modules/components/loading/Loading";
import Modal from "./modules/components/modal";
import { KEY_CONTEXT_USER } from "./lib/context/use.reducer";

function App() {
  const [{ isOpenModal, language }, dispatch] = useContext(UserContext);
  const [t, i18n] = useTranslation();
  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <div>
      <RouterProvider router={AppRoute()} />
      <ToastContainer />
      <Loading />
      {isOpenModal && <Modal />}
    </div>
  );
}

export default App;
