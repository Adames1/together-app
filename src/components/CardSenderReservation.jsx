import { formatDate } from "../utils/formattedDateTime";
import { FaRegClock, FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

function CardSenderReservation({ id, item }) {
  const { status } = item;
  const date = new Date(item.date_plan);

  // Estilos e íconos según estado
  const statusInfo = {
    confirmed: {
      icon: <FaCheck className="text-green-500 text-xl" />,
      text: "Su solicitud fue aceptada",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    declined: {
      icon: <LiaTimesSolid className="text-red-500 text-xl" />,
      text: "Su solicitud fue rechazada",
      color: "text-red-600",
      bg: "bg-red-100",
    },
    pending: {
      icon: <FaRegClock className="text-yellow-500 text-xl" />,
      text: "En espera de confirmación",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  };

  const { icon, text, color, bg } = statusInfo[status] || {};

  return (
    <li
      key={id}
      className="bg-white rounded-xl shadow-md p-5 mb-4 max-w-xl mx-auto border border-gray-200 hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-[#5F5050]">
          {item.name_plan}
        </h2>
        <span className="text-sm text-gray-500">{formatDate(date)}</span>
      </div>

      <p className="text-gray-600 mb-4 whitespace-pre-wrap">{item.message}</p>

      {status && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium ${bg} ${color}`}
          aria-live="polite"
          role="status"
        >
          {icon}
          <span>{text}</span>
        </div>
      )}
    </li>
  );
}

export default CardSenderReservation;
