import notreservation from "../assets/icon-not-reservation.svg";

function NotReservations() {
  return (
    <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4 text-center">
      <img src={notreservation} className="w-20" alt="Sin reservas" />
      <h2 className="text-[#9A9A9A] tracking-wider">
        No tienes reservaciones en este momento.
      </h2>
    </div>
  );
}

export default NotReservations;
