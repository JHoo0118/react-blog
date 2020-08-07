import React, { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";

const Modal = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    modal: { open, body },
    closeModal,
  } = rootStore.modalStore;
  return (
    <>
      {open && (
        <div className={"modal__page " + (open && "modal-effect")}>
          <div className="modal__outside" onClick={closeModal}></div>
          {/* <button className="modal--close--btn" onClick={closeModal}>
            &times;
          </button> */}
          <div className="modal__wrapper">
            <div className="modal__box">
              <div className="modal__content">{body}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Modal);
