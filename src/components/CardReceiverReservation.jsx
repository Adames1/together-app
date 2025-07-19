import { useState, useEffect } from "react";
import { appConsumer } from "../context/AppContext";
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

function CardReceiverReservation({ id, item }) {
  const { updateData } = appConsumer();
  const [selectedStatus, setSelectedStatus] = useState("");

  const { status } = item;

  useEffect(() => {
    if (!selectedStatus) return;

    const updateStatus = async () => {
      try {
        await updateData(id, selectedStatus);
        console.log("Reservation updated successfully");
      } catch (error) {
        console.error(`Error updating reservation status ${id} `, error);
      }
    };

    updateStatus();
  }, [selectedStatus]);

  const handleClick = (text) => {
    setSelectedStatus(text);
  };

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
          <h3>Haz aceptado esta solicitud</h3>
        </div>
      )}
      {status === "declined" && (
        <div>
          <LiaTimesSolid />
          <h3>Haz rechazado esta solicitud</h3>
        </div>
      )}
      {status === "pending" && (
        <div>
          <button
            type="button"
            value="confirmed"
            onClick={(e) => handleClick(e.target.value)}
          >
            Confirmar
          </button>
          <button
            type="button"
            value="declined"
            onClick={(e) => handleClick(e.target.value)}
          >
            Rechazar
          </button>
        </div>
      )}
    </li>
  );
}

export default CardReceiverReservation;
