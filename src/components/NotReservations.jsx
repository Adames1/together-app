import notreservation from "../assets/icon-not-reservation.svg";

function NotReservations() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white flex flex-col items-center justify-center rounded-xl p-6 text-center shadow-md w-full max-w-sm">
        <img src={notreservation} className="w-20 mb-4" alt="Sin reservas" />
        <h2 className="text-[#9A9A9A] tracking-wide text-base">
          No tienes reservaciones en este momento.
        </h2>
      </div>
    </div>
  );
}

export default NotReservations;
