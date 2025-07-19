import { FaRegClock, FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

function CardSenderReservation({ id, item }) {
  const { status } = item;

  return (
    <li key={id}>
      <div>
        <h2>{item.name_plan}</h2>
        <span>{item.date_plan}</span>
      </div>
      <div>
        <p>{item.message}</p>
      </div>
      {status === "confirmed" && (
        <div>
          <FaCheck />
          <h3>Su solicitud fue aceptada</h3>
        </div>
      )}
      {status === "declined" && (
        <div>
          <LiaTimesSolid />
          <h3>Su solicitud fue rechazada</h3>
        </div>
      )}
      {status === "pending" && (
        <div>
          <FaRegClock />
          <h3>En espera de confirmacion</h3>
        </div>
      )}
    </li>
  );
}

export default CardSenderReservation;
