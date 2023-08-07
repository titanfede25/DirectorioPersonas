export default function COntact() {
  return (
    <>
      <form >   
          <input type="text"  placeholder="Nombre"  className="u-full-width"  /><br></br>
          <input type="text"  placeholder="Apellido"  className="u-full-width" /><br></br>
          <input type="number" placeholder="Edad" className="u-full-width" /><br></br>
          <input type="text" placeholder="Email"  className="u-full-width" /><br></br>
          <button type="submit" className="u-full-width button-primary">Añadir Cita</button>
        </form>
    </>
  );
}

