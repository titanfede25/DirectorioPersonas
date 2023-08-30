import Personas from "./Personas.json";
export default function Stats() {

  let cantidadMayores=0;
  let edadMayor = 0;
  let mayores;
  let edadMenor = 999;
  let menores;
  Personas.map((persona) => {
    if(persona.edad>35){
      cantidadMayores=cantidadMayores+1;
    }
    if(persona.edad>edadMayor){
      mayores = persona.nombre + " " + persona.apellido;
      edadMayor = persona.edad;
    }
    else if(persona.edad===edadMayor){
      mayores = mayores + ", " + persona.nombre + " " + persona.apellido;
    }
    if(persona.edad<edadMenor){
      menores = persona.nombre + " " + persona.apellido;
      edadMenor = persona.edad;
    }
    else if(persona.edad===edadMenor){
      menores = menores + ", " + persona.nombre + " " + persona.apellido;
    }
    return true
  })

  return (
      <div className="StatsPersona">
      <h1>Cantidad personas mayores: {cantidadMayores}</h1>
      <h1>Persona/s mayor/es: </h1>
      <div>{mayores}
      <h1>Persona/s menor/es:</h1>
      <div>{menores}
      </div>
      </div>
      </div>
  );
}
