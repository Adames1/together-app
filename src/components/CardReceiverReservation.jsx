function CardReceiverReservation({ id, item }) {
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
        <button type="button">Confirmar</button>
        <button type="button">Rechazar</button>
      </div>
    </li>
  );
}

export default CardReceiverReservation;
