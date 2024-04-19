import React, { useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  description: string;
  title: string;
  action: () => void;
  open: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({
  description,
  title,
  action,
  open,
  close
}) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="close" onClick={() => close()}>
              Cerrar
            </button>
            <button
              className="close-modal"
              onClick={() => {
                action();
                close();
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
