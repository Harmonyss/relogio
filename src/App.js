import './componentes/Codigo/Codigo.js'
import './componentes/Codigo/Codigo.css'
function App() {
  return (
    
    <body>
            <div className="relogio">
                <div>
                    <span id="horas">00</span>
                    <span id="tempo">Horas</span>
                </div>
                <div>
                    <span id="minutos">00</span>
                    <span id="tempo">Minutos</span>
                </div>
                <div>
                    <span id="segundos">00</span>
                    <span id="tempo">Segundos</span>
                </div>

            </div>
        
        </body>
    )
    
}

export default App;
