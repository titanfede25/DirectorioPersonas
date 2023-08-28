import { useParams } from "react-router-dom";
import Personas from "./Personas.json";


export default function Persona() {
  const { id } = useParams();
  const persona = Personas.find((p)=>p.id===id)


  return (
    <>
        
          <div className="DetallesPersona">
            <h1>{`Apellido: ${persona.apellido}`}</h1>
            <h1>{`Nombre: ${persona.nombre}`}</h1>
            <h1>{`Email: ${persona.email}`}</h1>
            <h1>{`Edad: ${persona.edad}`}</h1>
          </div>
        
    </>
  );
  }