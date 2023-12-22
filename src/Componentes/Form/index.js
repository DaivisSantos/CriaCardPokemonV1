import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Form.css";

function Form(props) {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPkAdicionado({
      nome,
      id,
      imagem,
      tipo
    })
    setNome('')
    setId('')
    setImagem('')
    setTipo('')
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha as lacunas para criar o card do Pokemon</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          input="insira o nome do Pokemon"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Id"
          input="insira o id do Pokemon"
          valor={id}
          aoAlterado={(valor) => setId(valor)}
        />

        <CampoTexto
          label="Imagem"
          input="insira a imagem do Pokemon"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Tipo" 
          itens={props.times}
          valor={tipo}
          aoAlterado={(valor) => setTipo(valor)}
        />
        <Botao />
      </form>
    </section>
  );
}

export default Form;
