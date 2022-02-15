import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/pokemon">Pokedex</NavLink>
      </li>
      <li>tbd</li>
      <li>tbd</li>
    </ul>
  );
};

export default Navbar;
