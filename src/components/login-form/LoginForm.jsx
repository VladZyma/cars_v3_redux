import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { joiResolver } from "@hookform/resolvers/joi";

import { userValidator } from "../../validators/user.validator";
import { authService } from "../../services/auth.service";

function LoginForm() {
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "all", resolver: joiResolver(userValidator) });

  const navigate = useNavigate();

  async function onSubmit(user) {
    try {
      const { data } = await authService.login(user);
      authService.setAccessTokens(data);
      navigate("/cars");
    } catch (error) {
      setApiError(error.response?.data.detail);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User name:
        <input type="text" {...register("username")} />
      </label>
      {errors.username && <span>{errors.username.message}</span>}
      <label>
        Password:
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit" disabled={!isValid}>
        LOGIN
      </button>
      {apiError && <span style={{ color: "red" }}>{`❗ ${apiError} ❗`}</span>}
    </form>
  );
}

export default LoginForm;
