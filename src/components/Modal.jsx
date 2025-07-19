import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="
        fixed
        top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2
        z-50
        w-full max-w-lg
        rounded-2xl
        border-none
        p-6
        bg-white
        shadow-xl
        backdrop-filter backdrop-blur-sm
      "
      onClick={(e) => {
        // Cerramos modal si clic fuera del contenido
        if (e.target === dialog.current) {
          dialog.current.close();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
