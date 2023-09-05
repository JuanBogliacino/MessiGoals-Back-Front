import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { barsaImages } from "../images/dataImages";
import Footer from "../components/Footer";

const Home = () => {
  const [goals, setGoals] = useState([]);

  const getListGoals = () => {
    fetch("http://localhost:7000/api/goles")
      .then((res) => res.json())
      .then((result) => {
        setGoals(result.data);
      });
  };

  useEffect(() => {
    getListGoals();
  }, []);

  return (
    <>
      <Nav />
      <div className="banner-slider">
        <ul>
          {barsaImages.map((img, index) => (
            <li key={index}>
              <img src={img} alt="banner-img" />
            </li>
          ))}
        </ul>
      </div>

      <h1 className="h1-cant-goles">Goles en total : {goals.length}</h1>
      <div className="container-goles">
      <ul>
        {goals.map((goal, index) => (
          <div key={goal.id}>
            <li className="goles">
              <a href={goal.link} target="_blank">
                {index + 1}) {goal.equipo.name} vs {goal.rival.name} /{" "}
                {goal.competicion.name} / {goal.anio.anio} {goal.tipoDeGol.name != 'normal' ? '( ' + goal.tipoDeGol.name + ' )' : ''}
              </a>
            </li>
          </div>
        ))}
      </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;