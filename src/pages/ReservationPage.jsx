import { useRef, useState } from "react";
import ModalConfirmed from "../components/ModalConfirmed";
import toast from "react-hot-toast";
import ButtonBack from "../components/ButtonBack";

function ReservationPage() {
  const [reservations, setReservations] = useState({
    dateTime: "",
    selectedPlan: "",
    messages: "",
  });

  const modal = useRef();

  const dataTime = useRef();
  const selectedPlan = useRef();
  const messages = useRef();

  const handleSendReservation = () => {
    const enteredDateTime = dataTime.current.value;
    const enteredseletedPlan = selectedPlan.current.value;
    const enteredMessages = messages.current.value;

    if (
      enteredDateTime.trim() === "" ||
      enteredseletedPlan.trim() === "" ||
      enteredMessages.trim() == ""
    ) {
      toast.error("Todos los campos son requeridos");
    } else {
      setReservations({
        dateTime: enteredDateTime,
        selectedPlan: enteredseletedPlan,
        messages: enteredMessages,
      });
      modal.current.open();
    }

    // limpiar campos cuando se envia formulario
    dataTime.current.value = "";
    selectedPlan.current.value = "";
    messages.current.value = "";
  };

  return (
    <>
      <ModalConfirmed ref={modal} data={reservations}>
        <p className="text-[#FF7A71]">
          Confirma los datos de la cita y luego de click en "Confirmar", para
          finalizar la reserva o cancelar y volver a editar los datos de la cita
        </p>
      </ModalConfirmed>
      <section className="min-h-screen bg-[#FFF5F3]">
        <header className="fixed top-0 left-0 z-50 w-full h-14 px-8 py-8 sm:px-32">
          <ButtonBack />
        </header>

        <div className="relative bg-[url('./assets/background.png')] bg-no-repeat bg-cover bg-center w-full h-screen flex items-center justify-center sm:bg-contain sm:bg-right">
          {/* Overlay con degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a717c] to-[#555555] z-10"></div>

          <div className="bg-white/80 w-full z-20 px-4 py-10 rounded-xl flex flex-col items-center justify-center shadow border-t-4 border-[#D9594C] max-w-xs mt-8 sm:max-w-md">
            <h2 className="text-center text-md font-semibold text-[#D9594C] sm:text-lg">
              Reserva tu cita aquí
            </h2>
            <form className="mt-8 flex flex-col gap-4 items-center w-full px-3">
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="inputDate"
                  className="text-[#032930] text-md tracking-wide ml-3"
                >
                  Fecha y Hora
                </label>
                <input
                  type="dateTime-local"
                  name="datetime"
                  id="inputDate"
                  ref={dataTime}
                  className="bg-[#FFF5F3] rounded-full border-2 border-[#FF7A71] py-2 px-4 outline-none text-sm"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="inputPlan"
                  className="text-[#032930] text-md tracking-wide ml-3"
                >
                  Actividad o tipo de plan
                </label>
                <select
                  name="selectplan"
                  id="inputPlan"
                  ref={selectedPlan}
                  className="bg-[#FFF5F3] rounded-full border-2 border-[#FF7A71] py-2 px-4 outline-none text-sm"
                >
                  <option value="empty">Elige un plan</option>
                  <option value="plan1">Plan 1</option>
                  <option value="plan2">Plan 2</option>
                  <option value="plan3">Plan 3</option>
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="inputMessage"
                  className="text-[#032930] text-md tracking-wide ml-3"
                >
                  Mensaje personalizado
                </label>
                <textarea
                  name="message"
                  id="inputMessage"
                  ref={messages}
                  className="bg-[#FFF5F3] rounded-xl border-2 border-[#FF7A71] py-2 px-4 outline-none text-sm h-30"
                />
              </div>
              <button
                onClick={handleSendReservation}
                type="button"
                className="bg-[#FF7A71] text-white border-2 border-white uppercase rounded-full px-6 py-2 font-semibold"
              >
                Enviar reserva
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReservationPage;
