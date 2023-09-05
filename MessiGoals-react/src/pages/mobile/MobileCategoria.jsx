import {
  useListAnios,
  useListCompeticiones,
  useListEquipos,
  useListRivales,
  useListTipoDeGoles,
} from "../../Hooks/fetchData";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MobileCategoria = () => {
  const equipos = useListEquipos();
  const competiciones = useListCompeticiones();
  const rivales = useListRivales();
  const anios = useListAnios();
  const tipoDeGoles = useListTipoDeGoles();

  const location = useLocation();
  const lastPathPart = location.pathname.split("/").pop();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (lastPathPart === "equipo") {
      setInfo(equipos);
    }

    if (lastPathPart === "competicion") {
      setInfo(competiciones);
    }
    if (lastPathPart === "rival") {
      setInfo(rivales);
    }

    if (lastPathPart === "anio") {
      setInfo(anios);
    }

    if (lastPathPart === "tipoDeGol") {
      setInfo(tipoDeGoles);
    }
  }, [lastPathPart, equipos, competiciones, rivales, anios, tipoDeGoles]);

  return (
    <>
      <Nav />
      <div className="mobile-categorias">
        <ul>
          {lastPathPart == "anio" ? (
            <>
              {info.map((categoriaInfo) => (
                <li key={categoriaInfo.id}>
                  <Link className="link-categorias" to={`/${lastPathPart}/${categoriaInfo.id}`}>
                    {categoriaInfo.anio}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              {info.map((categoriaInfo) => (
                <li key={categoriaInfo.id}>
                  <Link className="link-categorias" to={`/${lastPathPart}/${categoriaInfo.id}`}>
                    {categoriaInfo.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default MobileCategoria;
