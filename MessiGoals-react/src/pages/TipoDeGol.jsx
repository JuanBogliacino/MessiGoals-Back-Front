import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTipoDeGolDetail } from "../Hooks/fetchData";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const TipoDeGol = () => {
  const { id } = useParams();
  const golesTipoDeGol = useTipoDeGolDetail(id);
  let nameTipoDeGol = "";
  if (golesTipoDeGol.length > 0) {
    nameTipoDeGol = golesTipoDeGol[0].tipoDeGol.name;
  }

  const [image, setImage] = useState("");

  useEffect(() => {
    if (nameTipoDeGol == "cabeza") {
      return setImage(
        "https://depor.com/resizer/gSikQc4e92CmhZwbil3cr_kUHEA=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LXCIDRW55ZB4BBSC2T3WIDIOQY.jpg"
      );
    }

    if (nameTipoDeGol == "penal") {
      return setImage(
        "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/354/0000354577.jpg"
      );
    }

    if (nameTipoDeGol == "tiro libre") {
      return setImage(
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/11/15211747/932.jpg"
      );
    }
  }, [nameTipoDeGol]);

  return (
    <>
      <Nav />
      <div className="banner">
        <img
          src={image}
          alt="Banner Image"
        />
      </div>
      <h1 className="h1-cant-goles">
        Goles de {nameTipoDeGol} : {golesTipoDeGol.length}
      </h1>
      <div className="container-goles">
        <ul>
          {golesTipoDeGol.map((goal, index) => (
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

export default TipoDeGol;
