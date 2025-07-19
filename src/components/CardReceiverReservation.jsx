import { useState, useEffect } from "react";
import { appConsumer } from "../context/AppContext";
import { formatDate } from "../utils/formattedDateTime";
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import toast from "react-hot-toast";

function CardReceiverReservation({ id, item }) {
  const { updateData } = appConsumer();
  const [selectedStatus, setSelectedStatus] = useState("");

  const date = new Date(item.date_plan);

  const { status } = item;

  useEffect(() => {
    if (!selectedStatus) return;

    const updateStatus = async () => {
      try {
        await updateData(id, selectedStatus);
        toast.success("Reservation updated successfully");
      } catch (error) {
        toast.error(`Error updating reservation status ${id} `, error);
      }
    };

    updateStatus();
  }, [selectedStatus]);

  const handleClick = (text) => {
    setSelectedStatus(text);
  };

  return (
    <li className="bg-white rounded-xl shadow-md p-5 mb-4 max-w-xl mx-auto border border-gray-200 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-[#5F5050]">
          {item.name_plan}
        </h2>
        <span className="text-sm text-gray-500">{formatDate(date)}</span>
      </div>

      <p className="text-gray-600 mb-4 whitespace-pre-wrap">{item.message}</p>

      {status === "confirmed" && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
          <FaCheck className="text-green-500 text-xl" />
          <h3>Has aceptado esta solicitud</h3>
        </div>
      )}

      {status === "declined" && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium">
          <LiaTimesSolid className="text-red-500 text-xl" />
          <h3>Has rechazado esta solicitud</h3>
        </div>
      )}

      {status === "pending" && (
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleClick("confirmed")}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
          >
            Confirmar
          </button>
          <button
            type="button"
            onClick={() => handleClick("declined")}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
          >
            Rechazar
          </button>
        </div>
      )}
    </li>
  );
}

export default CardReceiverReservation;
