import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <div>
      <h1>Ooops</h1>
      <h5>Something Went Wrong!</h5>
      <h5>
        {err.status} - {err.statusText}
      </h5>
    </div>
  );
};
export default Error;
