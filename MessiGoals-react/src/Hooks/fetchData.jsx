import { useState, useEffect } from 'react';

// EQUIPOS
 export const useListEquipos = () => {
  const [equipos, setEquipos] = useState([]);

  const getListEquipos = () => {
    fetch('http://localhost:7000/api/goles/equipos')
      .then(res => res.json())
      .then(result => {
        setEquipos(result.data);
      });
  };

  useEffect(() => {
    getListEquipos();
  }, []);

  return equipos;
};

export const useEquipoDetail = (id) => {
    const [golesEquipo, setGolesEquipo] = useState([]);
  
    const getEquipoDetail = (id) => {
      fetch(`http://localhost:7000/api/goles/equipo/${id}`)
        .then(res => res.json())
        .then(result => {
          setGolesEquipo(result.data);
        });
    };
  
    useEffect(() => {
      getEquipoDetail(id);
    }, [id]);
  
    return golesEquipo;
  };

// RIVALES
  export const useListRivales = () => {
    const [rivales, setRivales] = useState([]);
  
    const getListRivales = () => {
      fetch('http://localhost:7000/api/goles/rivales')
        .then(res => res.json())
        .then(result => {
          setRivales(result.data);
        });
    };
  
    useEffect(() => {
      getListRivales();
    }, []);
  
    return rivales;
  };

  export const useRivalDetail = (id) => {
    const [golesRival, setGolesRival] = useState([]);
  
    const getRivalDetail = (id) => {
      fetch(`http://localhost:7000/api/goles/rival/${id}`)
        .then(res => res.json())
        .then(result => {
          setGolesRival(result.data);
        });
    };
  
    useEffect(() => {
      getRivalDetail(id);
    }, [id]);
  
    return golesRival;
  };

// COMPETICIONES
export const useListCompeticiones = () => {
    const [competiciones, setCompeticiones] = useState([]);
  
    const getListcompeticiones = () => {
      fetch('http://localhost:7000/api/goles/competiciones')
        .then(res => res.json())
        .then(result => {
          setCompeticiones(result.data);
        });
    };
  
    useEffect(() => {
      getListcompeticiones();
    }, []);
  
    return competiciones;
  };

  export const useCompeticionDetail = (id) => {
    const [golesCompeticion, setGolesCompeticion] = useState([]);
  
    const getCompeticionDetail = (id) => {
      fetch(`http://localhost:7000/api/goles/competicion/${id}`)
        .then(res => res.json())
        .then(result => {
          setGolesCompeticion(result.data);
        });
    };
  
    useEffect(() => {
      getCompeticionDetail(id);
    }, [id]);
  
    return golesCompeticion;
  };

// AÑOS
export const useListAnios = () => {
    const [anios, setAnios] = useState([]);
  
    const getListanios = () => {
      fetch('http://localhost:7000/api/goles/anios')
        .then(res => res.json())
        .then(result => {
          setAnios(result.data);
        });
    };
  
    useEffect(() => {
      getListanios();
    }, []);
  
    return anios;
  };

  export const useAnioDetail = (id) => {
    const [golesAnio, setGolesAnio] = useState([]);
  
    const getAnioDetail = (id) => {
      fetch(`http://localhost:7000/api/goles/anio/${id}`)
        .then(res => res.json())
        .then(result => {
          setGolesAnio(result.data);
        });
    };
  
    useEffect(() => {
      getAnioDetail(id);
    }, [id]);
  
    return golesAnio;
  };

// TIPO DE GOL
export const useListTipoDeGoles = () => {
    const [tipoDeGoles, setTipoDeGoles] = useState([]);
  
    const getListTipoDeGoles = () => {
      fetch('http://localhost:7000/api/goles/tipoDeGoles')
        .then(res => res.json())
        .then(result => {
            setTipoDeGoles(result.data);
        });
    };
  
    useEffect(() => {
      getListTipoDeGoles();
    }, []);
  
    return tipoDeGoles;
  };

  export const useTipoDeGolDetail = (id) => {
    const [golesTipoDeGol, setGolesTipoDeGol] = useState([]);
  
    const getTipoDeGolDetail = (id) => {
      fetch(`http://localhost:7000/api/goles/tipoDeGol/${id}`)
        .then(res => res.json())
        .then(result => {
          setGolesTipoDeGol(result.data);
        });
    };
  
    useEffect(() => {
      getTipoDeGolDetail(id);
    }, [id]);
  
    return golesTipoDeGol;
  };