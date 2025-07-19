import { appConsumer } from "../context/AppContext";
import { formatDate } from "../utils/formattedDateTime";
import toast from "react-hot-toast";

function ConfirmSendReservation({ onCancel, data }) {
  const { insertData, receiverUser } = appConsumer();

  const { enteredDatePlan, enteredNamePlan, enteredMessage } = data;

  const date = formatDate(enteredDatePlan);

  const handleConfirmSend = async () => {
    try {
      await insertData({
        date_plan: enteredDatePlan,
        name_plan: enteredNamePlan,
        message: enteredMessage,
        status: "pending",
        receiver_id: receiverUser?.id,
        user_id: receiverUser?.id,
      });

      toast.success("Reserva realizada con éxito");
      onCancel();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col space-y-6 p-4 max-w-md mx-auto text-[#5F5050]">
      <h2 className="text-xl font-semibold text-center">
        Confirma los datos antes de enviar la reservación
      </h2>

      <div className="space-y-3 bg-[#FFE5E5] rounded-xl p-4 border border-[#FFDADA] shadow-sm">
        <p>
          <strong>Fecha & Hora de plan:</strong>{" "}
          <span className="font-medium">{date}</span>
        </p>
        <p>
          <strong>Plan seleccionado:</strong>{" "}
          <span className="font-medium capitalize">{enteredNamePlan}</span>
        </p>
        <p>
          <strong>Detalles del plan:</strong>{" "}
          <span className="font-medium whitespace-pre-wrap">
            {enteredMessage}
          </span>
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <button
          type="button"
          onClick={handleConfirmSend}
          className="bg-[#FF8B8D] hover:bg-[#ff6b6d] text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
        >
          Confirmar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-xl transition"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ConfirmSendReservation;
