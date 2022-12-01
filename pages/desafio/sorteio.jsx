import {mega} from '../../functions/mega'
import { useState } from 'react'
import NumeroDisplay from '../../components/NumeroDisplay'


export default function megasena() {

    const [qtde, setQtde] = useState<number>(6)
    const [numeros, setNumeros] = useState<number>(mega(qtde))

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Mega sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",

            }}>
                {renderizarNumeros()}
            </div>

            <div>
                <input
                    type="number"
                    min={6}
                    max={20}
                    value={qtde}
                    onChange={ev => setQtde(ev.target.value)}
                />
                <button
                    onClick={() => setNumeros(mega(qtde))}
                >
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}