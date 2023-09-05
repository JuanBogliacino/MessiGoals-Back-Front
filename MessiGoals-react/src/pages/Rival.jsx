import { useParams } from "react-router-dom"
import { useRivalDetail } from "../Hooks/fetchData"
import Nav from "../components/Nav"

import { barsaImages } from "../images/dataImages"
import Footer from "../components/Footer"

const Rival = () => {
    const { id } = useParams()
    const golesRival = useRivalDetail(id)
    let nameRival = "";
    if (golesRival.length > 0) {
      nameRival = golesRival[0].rival.name;
    }

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
        <h1 className="h1-cant-goles">Goles contra {nameRival} : {golesRival.length}</h1>
          <div className="container-goles">
          <ul>
            {
              golesRival.map((goal, index) => (
                <div key={goal.id}>
                  <li className="goles">
                    <a href={goal.link} target="_blank">{(index + 1)}) {goal.equipo.name} vs {goal.rival.name} / {goal.competicion.name} / {goal.anio.anio} {goal.tipoDeGol.name != 'normal' ? '( ' + goal.tipoDeGol.name + ' )' : ''}</a>
                  </li>
                </div>
              ))
            }
          </ul>
          </div>
          <Footer />
        </>
      )
}

export default Rival