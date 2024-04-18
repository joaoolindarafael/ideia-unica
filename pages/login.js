
function Amor(v){
     return (
        <div>
            <input id="texto" name="nome"  />
        </div>
     )
}


function Login(){
    return (
        <div>
            <Amor ></Amor>
            <p id="texto">Parametros</p>
            <button onClick={Amor("Antonio")}>Iniciar sessãos</button>
        </div>  
)
}
 
export default Login;