import { Link } from "react-router-dom";
import Personas from "./Personas.json";

export default function Home() {
  return (
    <div>
      <div className="TituloLista">
      Listado de Personas 
      </div>
      {Personas.map((persona) => (
        <div className="Listita">
        <div key={persona.id}>
          <Link to={`/Persona/${persona.id}`}><div className="NombreLista">{persona.nombre} {persona.apellido}</div></Link> 
        </div>
        </div>
      ))}
    </div>
  );
}