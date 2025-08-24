import { logOut } from "../services/auth";

function Home() {
  return (
    <div>
      Home
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  );
}

export default Home;
