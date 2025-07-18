import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appConsumer } from "../context/AppContext";
import Header from "../components/Header";
import NotReservations from "../components/NotReservations";
import CardSenderReservation from "../components/CardSenderReservation";
import CardReceiverReservation from "../components/CardReceiverReservation";

function HomePage() {
  const { fetchData, session, currentUser, receiverUser } = appConsumer();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getReservations = async () => {
      try {
        const data = await fetchData();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations", error.message);
      }
    };

    getReservations();
  }, []);

  return (
    <div className="h-screen bg-[#FFE6E6]">
      <Header />
      <main className="container mx-auto py-4 px-6">
        <Link to={"/create-reservation"}>Nueva reserva</Link>
        <div>
          {reservations.length > 0 ? (
            <ul>
              {reservations.map((item, index) => {
                if (item.sender_id === session.user.id) {
                  return (
                    <CardSenderReservation key={index} item={item} id={index} />
                  );
                } else if (item.receiver_id === session.user.id) {
                  return (
                    <CardReceiverReservation
                      key={index}
                      item={item}
                      id={index}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          ) : (
            <NotReservations />
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
