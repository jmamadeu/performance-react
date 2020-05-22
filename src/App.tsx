import React, { useState, useEffect, useMemo, useCallback } from 'react';

import TechItem from './TechItem';

function App() {
  const [techs, setTechs] = useState<string[]>([]);
  const [tech, setTech] = useState<string>('');

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) setTechs(JSON.parse(storageTechs));
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  const handeAdd = useCallback(() => {
    setTechs([...techs, tech]);
    setTech('');
  }, [tech, techs]);

  return (
    <>
      <p>
        Você tem <strong>{techSize}</strong> tecnologias!
      </p>
      <div>
        {techs.map((tech, i) => (
          <TechItem key={i} tech={tech} />
        ))}
      </div>

      <input
        type='text'
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />
      <br />

      <button onClick={handeAdd}>Adicionar</button>
    </>
  );
}

export default App;
