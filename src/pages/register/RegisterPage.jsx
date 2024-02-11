import RegisterForm from "../../components/register-form/RegisterForm";

import styles from "./RegisterPage.module.css";

function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
