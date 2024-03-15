import Botao from "./components/Botao/Botao";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import './App.css'

export default function App(){

    return(
        <>
        <div className="card">
            <form>
                    <Text/><br></br>
                    <Input/><br></br>
                    <Text/><br></br>
                    <Input/><br></br>
                    <Text/><br></br>
                    <Input/><br></br>
                <Botao/>
            </form>
        </div>
        </>
    )

}