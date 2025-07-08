import axios from "axios";
export const apiMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    const Base_Url = "https://fakestoreapi.com/";
    if (action.type === "api/call") {
      const { onSuccess, Url } = action.payload;
      axios.get(`${Base_Url}${Url}`).then((data) => {
        dispatch({
          type: onSuccess,
          payload: data.data,
        });
      });
    } else {
      next(action);
    }
  };
