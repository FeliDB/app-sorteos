import { useState } from "react";
import "./LogicaSorteo"
import { LogicaSorteo } from "./LogicaSorteo"
import "./SorteoPres.css"
import "./SorteoPres.mobile.css"

export default function SorteoPres(){

    const logica = new LogicaSorteo();
    const [participantes, setParticipantes] = useState<string[]>([]);
    const [participante, setParticipante] = useState<string>("");
    const [ganadorMostrado, setGanadorMostrado] = useState(false);

    return(
        <>
        <div className="lista-participantes">
            <h3>Lista de participantes</h3>
            <ul>
                {participantes.map((participante) => (
                    <li key={participante}>{participante}</li>
                ))}
            </ul>
        </div>

        <div className="rectangulo-elementos">
            <input
                placeholder="Nombre del participante"
                type="text"
                value={participante}
                onChange={(e) => setParticipante(e.target.value)}
            />
            <button onClick={() => {
                if (participante.trim()) {
                    setParticipantes(logica.AgregarParticipante(participante.trim(), participantes));
                    setParticipante("");
                }
            }}>Agregar participante</button>
        </div>

        <div className="Sortear">
            <button onClick={() => {
                setGanadorMostrado(true);
            }}>¡SORTEAR!</button>
        </div>

        <div className="ganador-container">
            {ganadorMostrado ? (
                <p className="ganador-animado">
                    🎉 El ganador es: <span>{logica.Sortear(participantes)}</span> 🎉
                </p>
            ) : null}
        </div>
    </>
    )
}
