import { logOut } from "../services/auth";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      Home
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </MainLayout>
  );
}

export default Home;
