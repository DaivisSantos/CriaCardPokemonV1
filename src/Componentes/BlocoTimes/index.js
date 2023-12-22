import './Times.css'

function Bloco (props) {
    return (
        <div className='bloco' style={{backgroundColor: props.cordefundo}}>
            <p className='ID'>#{props.id}</p>
            <img src={props.http} alt='bloco'/>
            <h2>{props.nome}</h2>
            <p>{props.Tipo}</p>
        </div>
    )
}

export default Bloco;

