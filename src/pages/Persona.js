import { useParams } from "react-router-dom";
export default function Persona() {
  const { id } = useParams();


  return (
    <>
        <h1>Soy la persona {`ID: ${id}`}</h1>
    </>
  );
  }