import React, { useState } from "react";
import "../estilos/ListaDeTareas.css"
import TareaForm from "./TareaForm.jsx"
import Tarea from "./Tarea";

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
   };

   const completarTarea = id => {
    const tareasActualizadas = tareas.map( tarea  =>{
      if(tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    }
    );
    setTareas(tareasActualizadas);
   };

   const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
   };

    return (
        <>
        <TareaForm onSubmit = {agregarTarea}/>
          <div className="tareas-lista-contendor">
            {
              tareas.map((tarea) => 
              <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto = {tarea.texto}
                completada = {tarea.completada}
                completarTarea = {completarTarea}
                eliminarTarea = {eliminarTarea}/>
              )
            }
          </div>
        </>
    )

}

export default ListaDeTareas;