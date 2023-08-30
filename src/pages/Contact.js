export default function COntact() {
  return (
    <>
      <div className="TituloForm">
      <u>Contactate con nosotros!</u>  
      </div>
      
      <form >   
          <br></br><br></br>
          <input type="text"  placeholder="Nombre"  className="u-full-width"  /><br></br><br></br>
          <input type="text"  placeholder="Apellido"  className="u-full-width" /><br></br><br></br>
          <input type="number" placeholder="Edad" className="u-full-width" /><br></br><br></br>
          <input type="text" placeholder="Email"  className="u-full-width" />
          <br></br><br></br>
          <div className="pixel2">Enviar</div>     
      </form>
     
    </>
  );
}

