import { appConsumer } from "../context/AppContext";
import toast from "react-hot-toast";

function ConfirmSendReservation({ onCancel, data }) {
  const { insertData, session, currentUser, receiverUser } = appConsumer();

  const { enteredDatePlan, enteredNamePlan, enteredMessage } = data;

  const handleConfirmSend = async () => {
    try {
      await insertData({
        date_plan: enteredDatePlan,
        name_plan: enteredNamePlan,
        message: enteredMessage,
        status: "pending",
        receiver_id: receiverUser?.id,
      });

      console.log("Reserva realizada con éxito");
      onCancel();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Confirma los datos antes de enviar la reservacion.</h2>
      <div>
        <h3>
          <strong>Fecha & Hora de plan:</strong> {enteredDatePlan}
        </h3>
        <h3>
          <strong>Plan seleccionado:</strong> {enteredNamePlan}
        </h3>
        <h3>
          <strong>Detalles del plan:</strong> {enteredMessage}
        </h3>
      </div>
      <div>
        <button type="button" onClick={handleConfirmSend}>
          Confirmar
        </button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ConfirmSendReservation;
