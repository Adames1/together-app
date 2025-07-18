import { FaRegClock } from "react-icons/fa6";

function CardSenderReservation({ id, item }) {
  return (
    <li key={id}>
      <div>
        <h2>{item.name_plan}</h2>
        <span>{item.date_plan}</span>
      </div>
      <div>
        <p>{item.message}</p>
      </div>
      <div>
        <FaRegClock />
        <h3>En espera de confirmacion</h3>
      </div>
    </li>
  );
}

export default CardSenderReservation;
