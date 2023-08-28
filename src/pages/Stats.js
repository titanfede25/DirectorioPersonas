import Personas from "./Personas.json";
export default function Stats() {

  let cantidadMayores=0;
  let edadMayor = 0;
  let mayores = [];
  let edadMenor = 999;
  let menores = [];
  Personas.map((persona) => {
    if(persona.edad>35){
      cantidadMayores=cantidadMayores+1;
    }
    if(persona.edad>=edadMayor){
      mayores.push(persona);
      edadMayor = persona.edad;
    }
    else if(persona.edad<=edadMenor){
      menores.push(persona);
      edadMenor = persona.edad;}
  })
    return (
        <div className="StatsPersona">
        <h1>Cantidad personas mayores: {cantidadMayores}</h1>
        <h1>Persona/s mayor/es: </h1>
        <div>{mayores.forEach(mayor => {
          return(<h1>{mayor.nombre} + {" "} + {mayor.apellido}</h1>)
        })}
        <h1>Persona/s menor/es:</h1>
        <div>{menores.forEach(menor => {
          return(<h1>{menor.nombre} + {" "} + {menor.apellido}</h1>)
        })}
        </div>
        </div>
        </div>
    );
    }
