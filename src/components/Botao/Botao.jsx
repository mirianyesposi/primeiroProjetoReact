import './style.css'

export default function Botao(){
    
    const evento = () => {
        alert ("Meu pastel é mais barato")
    }
    return(
        <button className='botao' onClick={evento}>Salvar</button>
    )
}