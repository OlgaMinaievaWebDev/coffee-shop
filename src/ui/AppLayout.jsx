import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
