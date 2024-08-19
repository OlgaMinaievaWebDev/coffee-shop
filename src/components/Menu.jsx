import menuItems from "../menuItems";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <section className="flex flex-col items-center justify-center  bg-darkerBrown text-white text-center px-4 py-12 h-[80vh] lg:max-w-auto mx-auto">
      {menuItems.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </section>
  );
}

export default Menu;
