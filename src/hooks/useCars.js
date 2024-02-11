import { useEffect } from "react";

export default function useCars(dispatch, carsActions, page) {
  useEffect(() => {
    dispatch(carsActions.getAll(page));
  }, [dispatch, carsActions, page]);
}
