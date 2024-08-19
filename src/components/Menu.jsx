import menuItems from "../menuItems";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="flex flex-col">
      {menuItems.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Menu;
