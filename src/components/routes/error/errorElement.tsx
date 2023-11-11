import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const err = useRouteError() as { message: string };
  return (
    <div className="cont">
      <h2>Error Element</h2>
      <p className="error">{err.message}</p>
    </div>
  );
}
