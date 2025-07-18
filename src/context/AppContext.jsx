import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { users as predefinedUsers, users } from "../utils/users.js";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const insertData = async (data) => {
    const { error } = await supabase.from("reservations").insert([data]);
    if (error) throw error;
  };

  const fetchData = async () => {
    const { data, error } = await supabase.from("reservations").select();
    if (error) throw error;
    return data;
  };

  const currentUser = predefinedUsers.find(
    (user) => user.id === session?.user.id
  );
  const receiverUser = predefinedUsers.find(
    (user) => user.id !== session?.user.id
  );

  return (
    <AppContext.Provider
      value={{
        loading,
        session,
        signIn,
        signOut,
        insertData,
        fetchData,
        currentUser,
        receiverUser,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export const appConsumer = () => useContext(AppContext);
