import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appConsumer } from "../context/AppContext";
import Header from "../components/Header";
import NotReservations from "../components/NotReservations";
import CardSenderReservation from "../components/CardSenderReservation";
import CardReceiverReservation from "../components/CardReceiverReservation";
import toast from "react-hot-toast";

function HomePage() {
  const { fetchData, session } = appConsumer();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getReservations = async () => {
      try {
        const data = await fetchData();
        setReservations(data);
      } catch (error) {
        toast.error("Error fetching reservations", error);
      }
    };

    getReservations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE6E6] to-[#FFF5F5]">
      <Header />
      <main className="container mx-auto max-w-4xl py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <Link
            to="/create-reservation"
            className="inline-block bg-[#FF8B8D] text-white font-semibold px-5 py-3 rounded-full shadow-md hover:bg-[#ff7375] transition"
          >
            + Nueva reserva
          </Link>
        </div>

        <section>
          {reservations.length > 0 ? (
            <ul className="space-y-4 max-h-[70vh] overflow-auto scrollbar-thin scrollbar-thumb-[#FF8B8D]/80 scrollbar-track-transparent">
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
                      id={item.id}
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
        </section>
      </main>
    </div>
  );
}

export default HomePage;
