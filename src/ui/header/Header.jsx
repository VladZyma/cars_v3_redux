import HeaderNav from "../../components/header-nav/HeaderNav";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRaw}>
        <h3>LOGO</h3>
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
