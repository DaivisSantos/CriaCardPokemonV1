import { useState } from 'react';
import Banner from './Componentes/Banner';
import Form from './Componentes/Form';
import Sessao from './Componentes/SessaoBloco';
import Rodapé from './Componentes/Footer';

function App() {
  const timesArray = [
    {
      nome: ''
    },
    {
      nome: 'Fogo',
      corPrimaria: '#FF7300',
      corSecundaria: '#CA8F7C'
    },
    {
      nome: 'Água',
      corPrimaria: '#008CFF',
      corSecundaria: '#7CA7CA'
    },
    {
      nome: 'Grama',
      corPrimaria: '#0EAA00',
      corSecundaria: '#7CCA7C'
    },
  ];

  const [pokemons, setPokemons] = useState([]);

  const aoNovoPk = (pokemon) => {
    console.log(pokemon);
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div>
      <Banner />
      <Form times={timesArray.map(time => time.nome)} aoPkAdicionado={pokemon => aoNovoPk(pokemon)} />
      {timesArray.map(Time => (
        <Sessao
          nome={Time.nome}
          key={Time.nome}  
          corPrimaria={Time.corPrimaria}
          corSecundaria={Time.corSecundaria}
          pokemons={pokemons.filter(pokemon => pokemon.tipo === Time.nome)}
        />
      ))}
      
      <Rodapé />
    </div>
  );
}

export default App;
