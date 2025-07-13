import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { sessionAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const ModalConfirmed = forwardRef(function ModalConfirmed(
  { children, data },
  ref
) {
  const { insertData } = sessionAuth();
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

  let contentData = {
    date: data.dateTime,
    title_plan: data.selectedPlan,
    message: data.messages,
    status: "pendiente",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await insertData(contentData);
      toast.success("Datos guardados con exito");
    } catch (error) {
      toast.error("Error al guardar los datos");
      console.error(error);
    }

    ref.current.close();
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
            <span>{data.dateTime}</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-gray-600">Actividad o tipo de plan:</strong>{" "}
            <span>{data.selectedPlan}</span>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-gray-600">Mensaje:</strong>{" "}
            <span>{data.messages}</span>
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
