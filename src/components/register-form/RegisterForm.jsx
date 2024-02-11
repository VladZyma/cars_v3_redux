import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { joiResolver } from "@hookform/resolvers/joi";

import { userValidator } from "../../validators/user.validator";
import { authService } from "../../services/auth.service";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: "all", resolver: joiResolver(userValidator) });

  const navigate = useNavigate();

  async function onSubmit(user) {
    try {
      await authService.register(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User name:
        <input type="text" required {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
      </label>
      <label>
        Password:
        <input type="password" required {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>

      <button disabled={!isValid}>REGISTER</button>
    </form>
  );
}

export default RegisterForm;
