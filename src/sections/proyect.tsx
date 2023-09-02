import { CardProyect } from "../components/cardproyect";
import "../css/proyect.css";
import translate from "../lang/traslate";
export function Proyect({ userlang }: { userlang: string }) {
  let lang = translate(userlang);
  return (
    <>
      <div className="containerproyect">
        <h1>{lang.proyect.title}</h1>
        <h2>
          <p>{lang.proyect.description}</p>
        </h2>
        <div className="containerproyectcard">
          <CardProyect userlang={userlang} />
          <CardProyect userlang={userlang} />
          <CardProyect userlang={userlang} />

          <CardProyect userlang={userlang} />
          <CardProyect userlang={userlang} />
          <CardProyect userlang={userlang} />
        </div>
      </div>
    </>
  );
}
