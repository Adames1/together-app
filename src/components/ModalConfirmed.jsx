import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ModalConfirmed = forwardRef(function ModalConfirmed({ children }, ref) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-4 sm:max-w-[400px] -z-[999]"
    >
      <div>{children}</div>
      <div>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-0.5">
            <strong className="text-gray-600">Fecha y Hora:</strong>{" "}
            <span>07/07/2025 12:30 PM</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-gray-600">Actividad o tipo de plan:</strong>{" "}
            <span>Plan1</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-gray-600">Mensaje:</strong>{" "}
            <span>Aqui ira el mensaje</span>
          </li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        action="dialog"
        className="flex items-center justify-center gap-2 mt-6"
      >
        <button
          onClick={() => ref.current.close()}
          type="button"
          className="bg-gray-200 py-2 px-4 rounded-full"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-[#FF7A71] py-2 px-4 rounded-full text-white"
        >
          Confirmar
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ModalConfirmed;
