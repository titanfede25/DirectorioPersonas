import { Link } from "react-router-dom";
import Personas from "./Personas.json";

export default function Home() {
  return (
    <div>
      <h1>Listado:</h1>
      {Personas.map((persona) => (
        <div key={persona.id}>
          <Link to={`/Persona/${persona.id}`}><p>{persona.nombre} {persona.apellido}</p></Link> 
        </div>
      ))}
    </div>
  );
}