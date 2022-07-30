import { useContext } from "react";
import { useEffect } from "react";
import { UtilContext } from "../../context/";
import "./modal.scss";

export const Modal = () => {
  const { utilDispatch, modalMessage } = useContext(UtilContext);
  console.log(modalMessage);

  useEffect(() => {
    const removeModal = (e) => {
      if (e.target.className === "modal-root") {
        utilDispatch({ type: "removeModal" });
      }
    };

    document.addEventListener(`click`, (e) => {
      removeModal(e);
    });

    return () => {
      document.removeEventListener(`click`, (e) => {
        removeModal(e);
      });
    };
  });

  return (
    <div className="modal-root">
      <div className="modal">
        {modalMessage}
      </div>
    </div>
  );
};
