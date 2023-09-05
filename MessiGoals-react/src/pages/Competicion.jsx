import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCompeticionDetail } from "../Hooks/fetchData";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Competicion = () => {
  const { id } = useParams();
  const golesCompeticion = useCompeticionDetail(id);
  let nameCompeticion = "";
  if (golesCompeticion.length > 0) {
    nameCompeticion = golesCompeticion[0].competicion.name;
  }

  const [image, setImage] = useState("");

  useEffect(() => {
    if (nameCompeticion == "Champions League") {
      return setImage(
        "https://media.tycsports.com/files/2020/05/27/100701/lionel-messi-2009.jpg"
      );
    }

    if (nameCompeticion == "Copa del Rey") {
      return setImage(
        "https://s1.eestatic.com/2017/05/27/deportes/futbol/copa-del-rey/copa_del_rey_de_futbol-futbol-fc_barcelona_219240659_35219968_1706x960.jpg"
      );
    }

    if (nameCompeticion == "Amistosos") {
      return setImage(
        "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-03/nba-plain--99ce3ef9-b8d1-424e-8689-3d06774a6bdd.png?itok=7Ymf3b6W"
      );
    }

    if (nameCompeticion == "Mundial") {
      return setImage(
        "https://www.noticiasdebariloche.com.ar/wp-content/uploads/2022/12/H5RKI6X3KFCCNM4MIMBSXJIQEA-scaled.jpg"
      );
    }

    if (nameCompeticion == "Copa América") {
      return setImage(
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0711%2Fr878963_1296x729_16%2D9.jpg"
      );
    }

    if (nameCompeticion == "Eliminatorias") {
      return setImage(
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/23205733/Argentina-Chile-eliminatorias-festejo-Messi-1920.jpg"
      );
    }

    if (nameCompeticion == 'Supercopa de España') {
      return setImage('https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt34c56c896c052139/644a80603e510a3324f88ee4/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-27T150148.050.jpg?auto=webp&format=pjpg&width=3840&quality=60')
    }

    if (nameCompeticion == "Mundial de Club") {
      return setImage(
        "https://www.sportsnet.ca/wp-content/uploads/2015/06/07756647.jpg"
      );
    }

    if (nameCompeticion == "Supercopa de Europa") {
      return setImage(
        "https://www.infobae.com/new-resizer/xpAJe1a9fJSzcYcmOgXti3jfF7k=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/K6GXFP3YMFHPLLMDO7H2JFSJBU"
      );
    }

    if (nameCompeticion == "Ligue 1"  || nameCompeticion == "Supercopa de Francia") {
      return setImage(
        "https://media.primicias.ec/2023/06/03171106/messi-despide.jpg"
      );
    }

    setImage("https://images5.alphacoders.com/521/thumb-1920-521476.jpg");
  }, [nameCompeticion]);

  return (
    <>
      <Nav />
      <div className="banner">
        <img src={image} alt="Banner Image" />
      </div>
      <h1 className="h1-cant-goles">
        Goles en {nameCompeticion} : {golesCompeticion.length}
      </h1>
      <div className="container-goles">
        <ul>
          {golesCompeticion.map((goal, index) => (
            <div key={goal.id}>
              <li className="goles">
                <a href={goal.link} target="_blank">
                  {index + 1}) {goal.equipo.name} vs {goal.rival.name} /{" "}
                  {goal.competicion.name} / {goal.anio.anio}{" "}
                  {goal.tipoDeGol.name != "normal"
                    ? "( " + goal.tipoDeGol.name + " )"
                    : ""}
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

export default Competicion;
