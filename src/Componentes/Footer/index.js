import './Footer.css'

function Rodapé () {
    return (
        <section  className='rodape'>
            <div className='redes'>
                <img src='/imagens/fb.png' alt='face'/>
                <img src='/imagens/ig.png' alt='insta'/>
                <img src='/imagens/tw.png' alt='twitter'/>
            </div>
            <div className='logo'>
                <img src='/imagens/pngegg.png' alt='pokebola'/>
            </div>
            <div className='paragrafo'>
                <p>Desenvolvido por DS</p>
            </div>
        </section>
    )
}

export default Rodapé;