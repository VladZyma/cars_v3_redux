import { Routes, Route, Navigate } from "react-router-dom";

//UI
import MainLayout from "./ui/main-layout/MainLayout";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
//PAGES
import MainPage from "./pages/main/MainPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import CarsPage from "./pages/cars/CarsPage";
import Error404 from "./pages/error404/Error404";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars" element={<CarsPage />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
