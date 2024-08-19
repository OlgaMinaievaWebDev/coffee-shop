import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
