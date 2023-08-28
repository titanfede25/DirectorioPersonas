import Personas from "./Personas.json";
export default function Stats() {

  let cantidadMayores=0;
  let edadMayor = 0;
  let mayor;
  let edadMenor = 999;
  let menor;
  Personas.map((persona) => {
    if(persona.edad>35){
      cantidadMayores=cantidadMayores+1;
    }
    if(persona.edad>edadMayor){
      mayor = persona.nombre + " " + persona.apellido;
      edadMayor = persona.edad;
    }
    else if(persona.edad===edadMayor){
      mayor = mayor + ", " + persona.nombre + " " + persona.apellido;
    }
    if(persona.edad<edadMenor){
      menor = persona.nombre + " " + persona.apellido;
      edadMenor = persona.edad;
    }
    else if (persona.edad===edadMenor){
      menor = menor + ", " + persona.nombre + " " + persona.apellido;
    }
  })
/*no muestra mas de una persona cuando hay dos de 19 años*/
    return (
      <>
        <h1>Cantidad personas mayores: {cantidadMayores}</h1>
        <h1>Persona/s mayor/es: {mayor}</h1>
        <h1>Persona/s menor/es: {menor}</h1>
      </>
    );
  }
  
  