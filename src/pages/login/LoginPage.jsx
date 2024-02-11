import { useSearchParams } from "react-router-dom";

import LoginForm from "../../components/login-form/LoginForm";

import styles from "./LoginPage.module.css";

function LoginPage() {
  const [query] = useSearchParams();

  return (
    <div className={styles.LoginPage}>
      {query.has("expSession") && (
        <h3 style={{ color: "red" }}>Session has expired!!!</h3>
      )}
      <LoginForm />
    </div>
  );
}

export default LoginPage;
