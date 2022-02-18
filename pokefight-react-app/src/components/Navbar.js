import { NavLink } from "react-router-dom";

const Navbar = ({ pageReset }) => {
  return (
    <div className="pokenavbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon" onClick={() => pageReset(1)}>
            Pokédex
          </NavLink>
        </li>
        <li>
          <NavLink to="/fight">Fight</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
