import { useLocation, useParams } from "react-router-dom";

const Dettaglio = () => {
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params.id);
  return (
    <div>
      {" "}
      Dettaglio
      <div>{location.state}</div>
    </div>
  );
};

export default Dettaglio;
