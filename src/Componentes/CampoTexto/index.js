import './CampoTexto.css'

function CampoTexto (props) {

    const valorFinal = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className='campotexto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={valorFinal} required={props.obrigatorio} placeholder={props.input}/>
        </div>
    )
}

export default CampoTexto;