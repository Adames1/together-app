import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import ConfirmSendReservation from "../components/ConfirmSendReservation";

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
      <section>
        <Link to={"/"}>Pagina principal</Link>
        <div>
          <h2>Reservar ahora!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="dateTimeLocal">
                Fecha y Hora <strong>*</strong>
              </label>
              <input
                type="datetime-local"
                ref={dateTimeRef}
                id="dateTimeLocal"
                required
              />
            </div>
            <div>
              <label htmlFor="selectPlan">
                Seleccion el plan <strong>*</strong>
              </label>
              <select ref={namePlanRef} id="selectPlan" required>
                <option value="plan1">Plan 1</option>
                <option value="plan2">Plan 2</option>
                <option value="plan3">Plan 3</option>
                <option value="plan4">Plan 4</option>
              </select>
            </div>
            <div>
              <label htmlFor="messageDetails">
                Dejalles de la reservas <strong>*</strong>
              </label>
              <textarea ref={messageRef} id="messageDetails" required />
            </div>

            <div>
              <button type="submit">Enviar reserva</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ReservationFormPage;
