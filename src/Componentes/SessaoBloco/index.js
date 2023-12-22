import "./SessaoBloco.css";
import Bloco from '../BlocoTimes'



function Sessao(props) {
    
  // if (props.nome.trim() === '') {
  //   return null; // Retorna null se props.nome for uma string vazia
  // } else 
  return (
    (props.pokemons.length > 0) && <section className="sectionBlock" style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{borderBottomColor : props.corPrimaria}}>{props.nome}</h3>
        <ul>
          {props.pokemons.map(pokemon => <Bloco key={pokemon.id} nome={pokemon.nome} id={pokemon.id} Tipo={pokemon.tipo} http={pokemon.imagem} cordefundo={props.corPrimaria}/>)}
        </ul>
    </section>
  );
}

export default Sessao;
