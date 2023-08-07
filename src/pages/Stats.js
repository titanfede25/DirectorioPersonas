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
    if(persona.edad<edadMenor){
      menor = persona.nombre + " " + persona.apellido;
      edadMenor = persona.edad;
    }
  })
  
    return (
      <>
        <h1>{cantidadMayores}</h1>
        <h1>{mayor}</h1>
        <h1>{menor}</h1>

      </>
    );
  }
  
  