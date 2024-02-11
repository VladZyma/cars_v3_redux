import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carsActions } from "../../redux/carsSlice";
import { carValidator } from "../../validators/car.validator";
import { useCarForUpdate } from "../../hooks/useCarForUpdate";

function CarForm({ dispatch, carForUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "all", resolver: joiResolver(carValidator) });

  useCarForUpdate(dispatch, setValue, carForUpdate);

  function onSubmit(car) {
    if (carForUpdate) {
      dispatch(carsActions.updateById(carForUpdate.id, car));
    } else {
      dispatch(carsActions.addCar(car));
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Brand:
        <input type="text" {...register("brand")} />
        {errors.brand && (
          <span style={{ color: "red" }}>{errors.brand.message}</span>
        )}
      </label>
      <label>
        Price:
        <input type="text" {...register("price", { valueAsNumber: true })} />
        {errors.price && (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        )}
      </label>
      <label>
        Year:
        <input type="text" {...register("year", { valueAsNumber: true })} />
        {errors.year && (
          <span style={{ color: "red" }}>{errors.year.message}</span>
        )}
      </label>
      <button type="submit" disabled={!isValid}>
        {carForUpdate ? "UPDATE" : "CREATE"}
      </button>
    </form>
  );
}

export default CarForm;
