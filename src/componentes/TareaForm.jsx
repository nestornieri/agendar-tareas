import React , {useState} from "react";
import "../estilos/TareaForm.css";
import { v4 as uuidv4 } from "uuid";

function TareaForm (props) {

const [input, setInput] = useState('');

const manejarCambio = event => {
  setInput(event.target.value);
}

const manejarEnvio = event => {
  event.preventDefault();
  const tareaNueva = {
    id: uuidv4(),
    texto: input,
    completado: false
  }
  props.onSubmit(tareaNueva);
}

    return (
        <form className = "tarea-form" 
        onSubmit={manejarEnvio}>
            <input
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={manejarCambio}>
            </input>
            <button
              className="tarea-boton"
              >
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaForm;