import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import menuItems from "../menuItems";

function AppLayout() {
  const navigation = useNavigation();

  const featuredMenuItems = menuItems.slice(0, 3); // For example, display the first 3 items
  return (
    <>
      <Header />
      <Outlet />
      <main className="pt-4">
        <div className="bg-lightBrown py-4">
          <div className="container mx-auto flex flex-wrap justify-center">
            {featuredMenuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default AppLayout;
