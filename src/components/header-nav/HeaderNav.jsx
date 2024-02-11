import { NavLink } from "react-router-dom";

import styles from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
