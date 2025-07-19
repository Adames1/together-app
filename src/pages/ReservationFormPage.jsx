import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import ConfirmSendReservation from "../components/ConfirmSendReservation";
import { couplePlans } from "../utils/planList";

function ReservationFormPage() {
  const [data, setData] = useState([]);
  const modal = useRef();
  const dateTimeRef = useRef();
  const namePlanRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredDatePlan = dateTimeRef.current.value;
    const enteredNamePlan = namePlanRef.current.value;
    const enteredMessage = messageRef.current.value;

    if (
      enteredDatePlan.trim() ||
      enteredNamePlan.trim() ||
      enteredMessage.trim()
    ) {
      modal.current.open();
      setData({ enteredDatePlan, enteredNamePlan, enteredMessage });
      return;
    }
  };

  return (
    <>
      <Modal ref={modal}>
        <ConfirmSendReservation
          onCancel={() => modal.current.close()}
          data={data}
        />
      </Modal>

      <section className="min-h-screen bg-gradient-to-b from-[#FFE6E6] to-white flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 space-y-8">
          <Link
            to="/"
            className="inline-block text-[#FF8B8D] hover:text-[#ff6b6d] font-medium mb-2 transition"
          >
            ← Página principal
          </Link>

          <h2 className="text-2xl font-bold text-[#5F5050] mb-6 text-center">
            Reservar ahora!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fecha y Hora */}
            <div className="flex flex-col">
              <label
                htmlFor="dateTimeLocal"
                className="mb-1 text-[#5F5050] font-medium"
              >
                Fecha y Hora <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                ref={dateTimeRef}
                id="dateTimeLocal"
                required
                className="rounded-xl border border-[#FFDADA] bg-[#FFE5E5] px-4 py-3 text-[#5F5050] focus:outline-none focus:ring-2 focus:ring-[#FF8B8D] transition"
              />
            </div>

            {/* Selección del Plan */}
            <div className="flex flex-col">
              <label
                htmlFor="selectPlan"
                className="mb-1 text-[#5F5050] font-medium"
              >
                Selecciona el plan <span className="text-red-500">*</span>
              </label>
              <select
                ref={namePlanRef}
                id="selectPlan"
                required
                className="rounded-xl border border-[#FFDADA] bg-[#FFE5E5] px-4 py-3 text-[#5F5050] focus:outline-none focus:ring-2 focus:ring-[#FF8B8D] transition"
                defaultValue="default"
              >
                <option disabled value="default">
                  Elige un plan
                </option>
                {couplePlans.map((plan, index) => (
                  <option key={index} value={plan.value}>
                    {plan.value}
                  </option>
                ))}
              </select>
            </div>

            {/* Detalles de la reserva */}
            <div className="flex flex-col">
              <label
                htmlFor="messageDetails"
                className="mb-1 text-[#5F5050] font-medium"
              >
                Detalles de la reserva <span className="text-red-500">*</span>
              </label>
              <textarea
                ref={messageRef}
                id="messageDetails"
                required
                rows={4}
                className="rounded-xl border border-[#FFDADA] bg-[#FFE5E5] px-4 py-3 text-[#5F5050] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF8B8D] transition"
              />
            </div>

            {/* Botón enviar */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#FF8B8D] hover:bg-[#ff6b6d] text-white font-semibold py-3 rounded-xl shadow-md transition"
              >
                Enviar reserva
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ReservationFormPage;
