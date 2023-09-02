import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import "./css/App.css";
import { Loaderanimatins } from "./components/animations/loader";
import transtalate from "./lang/traslate";
import HeaderButtons from "./components/HeaderButtons";
import Aboutpage from "./sections/about";
import { Selectlenguaje } from "./components/selectlang/lang";
import { Proyect } from "./sections/proyect";
import { Skill } from "./sections/skill";

function App() {
  const [isloading, setloading] = useState(true);
  const [param] = useSearchParams();

  const [userLang, setLang] = useState(param.get("lang") ?? "");
  const location = useLocation();
  const langtranslate = transtalate(userLang);

  useEffect(() => {
    setLang(param.get("lang") ?? "");
  }, [location]);
  if (userLang === "en" || userLang === "es") {
    return (
      <div className="App">
        <Loaderanimatins loaderready={isloading} />
        <header className="headercontainer">
          <h1>OnlyD</h1>
          <ul>
            <li>
              <a href="#about">
                <HeaderButtons title={langtranslate?.about.title} />
              </a>
            </li>
            <li>
              <a href="#proyect">
                <HeaderButtons title={langtranslate?.proyect.title} />
              </a>
            </li>
            <li>
              <a href="#skill">
                <HeaderButtons title={langtranslate?.skill.title} />
              </a>
            </li>
            <li>
              <a href="#contact">
                <HeaderButtons title={langtranslate?.contact.title} />
              </a>
            </li>
          </ul>
        </header>
        <div className="container" id="about">
          <Aboutpage userLang={userLang} />
        </div>
        <div
          className="container"
          id="proyect"
          style={{ backgroundColor: "#99DE05" }}
        >
          <Proyect userlang={userLang} />
        </div>
        <div
          className="container"
          id="skill"
          style={{ backgroundColor: "#DE0599" }}
        >
          <Skill lang={userLang} />
        </div>
        <div
          className="container"
          id="contact"
          style={{ backgroundColor: "#DE4A05" }}
        >
          <h2>{userLang === "en" ? "contact me" : "contactame"}</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <Selectlenguaje userLang={userLang} />
    </>
  );
}

export default App;
