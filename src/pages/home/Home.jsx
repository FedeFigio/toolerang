import { Link } from "react-router-dom";

const Home = () => {
  const oggetto = [{ numero: 1 }, { numero: 2 }, { numero: 3 }, { numero: 4 }];
  return (
    <div>
      {" "}
      hompage
      {oggetto.map((ogg) => {
        return (
          <Link key={ogg.numero} to={"/dettaglio/" + ogg.numero}>
            {ogg.numero}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
