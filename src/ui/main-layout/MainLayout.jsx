import { Outlet } from "react-router";

import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <main className={styles.mainLayout}>
      <Outlet />
    </main>
  );
}

export default MainLayout;
