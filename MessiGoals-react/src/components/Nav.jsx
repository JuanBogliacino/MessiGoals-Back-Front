import {
  useListAnios,
  useListCompeticiones,
  useListEquipos,
  useListRivales,
  useListTipoDeGoles,
} from "../Hooks/fetchData";
import { Link } from "react-router-dom";

import { FiMenu } from 'react-icons/fi'

import { useEffect, useRef, useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
  const equipos = useListEquipos();
  const rivales = useListRivales();
  const competiciones = useListCompeticiones();
  const anios = useListAnios();
  const tipoDeGoles = useListTipoDeGoles();

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const divRef = useRef(null)
  const navRef = useRef(null);

  useEffect(() => {
    const navHeight = navRef.current.clientHeight;
    divRef.current.style.top = `${navHeight}px`;
  }, []);

  return (
    <>
      <nav className="nav" ref={navRef}>
        <Link to='/'><h2 className="logo">MessiGoals</h2></Link>
        <ul className="menu-horizontal">
          <li>
            <Link to="/">Total</Link>
          </li>
          <li>
            <Link to="/mobile/equipo">Equipo</Link>
            <ul className="menu-vertical">
              {equipos.map((equipo) => (
                <li key={equipo.id}>
                  <Link to={`/equipo/${equipo.id}`}>{equipo.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/mobile/competicion">Competicion</Link>
            <ul className="menu-vertical">
              {competiciones.map((competicion) => (
                <li key={competicion.id}>
                  <Link to={`/competicion/${competicion.id}`}>
                    {competicion.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/mobile/rival">Rival</Link>
            <ul className="menu-vertical">
              {rivales.map((rival) => (
                <li key={rival.id}>
                  <Link to={`/rival/${rival.id}`}>
                    {rival.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/mobile/anio">Temporada</Link>
            <ul className="menu-vertical">
              {anios.map((anio) => (
                <li key={anio.id}>
                  <Link to={`/anio/${anio.id}`}>
                    {anio.anio}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/mobile/tipoDeGol">Tipo de gol</Link>
            <ul className="menu-vertical">
              {tipoDeGoles.map((tipoDeGol) => (
                <li key={tipoDeGol.id}>
                  <Link to={`/tipoDeGol/${tipoDeGol.id}`}>
                    {tipoDeGol.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* <div className="menu-mobile">
          <FiMenu />
        </div> */}

        <div onClick={handleClick} className='icono-responsive'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'menu-mobile-responsive'} ref={divRef}>
        <li>
          <Link className='link-responsive' onClick={handleClick} to='/'>
            Total
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link-responsive' onClick={handleClick} to='/mobile/equipo'>
            Equipo
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link-responsive' onClick={handleClick} to='/mobile/competicion'>
            Competicion
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link-responsive' onClick={handleClick} to='/mobile/rival'>
            Rival
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link-responsive' onClick={handleClick} to='/mobile/anio'>
            Temporada
          </Link>
        </li>
        <li>
          {' '}
          <Link className='link-responsive' onClick={handleClick} to='/mobile/tipoDeGol'>
            Tipo de gol
          </Link>
        </li>
        </ul>

      </nav>
    </>
  );
};

export default Nav;
