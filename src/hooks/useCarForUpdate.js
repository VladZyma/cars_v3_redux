import { useEffect } from "react";

function useCarForUpdate(dispatch, setValue, carForUpdate) {
  useEffect(() => {
    if (carForUpdate) {
      setValue("brand", carForUpdate.brand, { shouldValidate: true });
      setValue("price", carForUpdate.price, { shouldValidate: true });
      setValue("year", carForUpdate.year, { shouldValidate: true });
    }
  }, [dispatch, setValue, carForUpdate]);
}

export { useCarForUpdate };
