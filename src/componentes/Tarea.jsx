import React from "react";
import "../estilos/Tarea.css";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div 
                className="tarea-texto" 
                onClick={()=> completarTarea(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <p className="tarea-icono"
                  onClick={() => eliminarTarea(id)}
                >X</p>
            </div>
        </div>
    )
}

export default Tarea;