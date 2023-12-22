import './ListaSuspensa.css'

function ListaSuspensa (props) {


    return (
        <div className='ListaSus'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                {props.itens.map(itens => {
                    return (<option key={itens}> {itens} </option>)
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;