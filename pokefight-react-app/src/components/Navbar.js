import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="pokenavbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pokemon">Pokedex</NavLink>
      </li>
      <li>
        <NavLink to="/fight">Fight</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
