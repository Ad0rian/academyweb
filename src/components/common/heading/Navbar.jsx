import "./header.css";
import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
      <ul className="menus flexSB center">
         {menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
   })}
      </ul>
  );
};

export default Navbar;