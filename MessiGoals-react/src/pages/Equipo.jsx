import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEquipoDetail } from "../Hooks/fetchData";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Equipo = () => {
  const { id } = useParams();
  const golesEquipo = useEquipoDetail(id);
  let nameEquipo = "";
  if (golesEquipo.length > 0) {
    nameEquipo = golesEquipo[0].equipo.name;
  }

  const [image, setImage] = useState('')

  useEffect(() => {
    if (nameEquipo == 'Barcelona') {
      return setImage('https://images5.alphacoders.com/521/thumb-1920-521476.jpg')
    }

    if (nameEquipo == 'Argentina') {
      return setImage('https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-03/nba-plain--99ce3ef9-b8d1-424e-8689-3d06774a6bdd.png?itok=7Ymf3b6W')
    }

    if (nameEquipo == 'PSG') {
      return setImage('https://www.pasionfutbol.com/__export/1632918743571/sites/pasionfutbol/img/2021/09/29/gooool_messi_psg.jpg_960850000.jpg')
    }

    setImage('https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1561875450.jpeg?w=1581&h=1054&crop=1')
  }, [nameEquipo])

  return (
    <>
      <Nav />
      <div className="banner">
        <img src={image} alt="Banner Image" />
      </div>

      <h1 className="h1-cant-goles">
        Goles con {nameEquipo} : {golesEquipo.length}
      </h1>
      <div className="container-goles">
      <ul>
        {golesEquipo.map((goal, index) => (
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

export default Equipo;