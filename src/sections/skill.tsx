import "../css/skill.css";
import { skills } from "../json/skilljson";
import { Skillcard } from "../components/Skillcard";
import { useState } from "react";

export function Skill({ lang }: { lang: string }) {
  const [currentSkill, setCurrentSkill] = useState("");
  const frontend = document.getElementById("frontend");
  const backend = document.getElementById("backend");
  const database = document.getElementById("database");

  const buttonclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (currentSkill.length > 0) {
      document
        .getElementById(currentSkill)
        ?.classList.remove("skillbutton-clicked");
    }

    frontend!.style.display = "none";
    backend!.style.display = "none";
    database!.style.display = "none";

    if (e.currentTarget.id === "frontendbutton") {
      frontend!.style.display = "block";
      //			buttonf!.classList.add('skillbutton-clicked');
    } else if (e.currentTarget.id === "backendbutton") {
      backend!.style.display = "block";
      //		buttonb!.classList.add('skillbutton-clicked');
    } else {
      database!.style.display = "block";
      //	buttond!.classList.add('skillbutton-clicked');
    }

    if (e.currentTarget.id === currentSkill) {
      e.currentTarget.classList.remove("skillbutton-clicked");
      setCurrentSkill("");
      frontend!.style.display = "block";
      backend!.style.display = "block";
      database!.style.display = "block";
    } else {
      setCurrentSkill(e.currentTarget.id);
    }
  };

  return (
    <div className="skillcontainer">
      <h1>Skill</h1>
      <div className="skillbuttoncontainer">
        <button
          id="frontendbutton"
          onClick={buttonclick}
          className="skillbutton"
        >
          Frontend
        </button>
        <button
          id="backendbutton"
          onClick={buttonclick}
          className="skillbutton"
        >
          Backend
        </button>
        <button
          id="databasebutton"
          onClick={buttonclick}
          className="skillbutton"
        >
          Database
        </button>
      </div>

      <div id="frontend">
        <Skillcard skills={skills.frontend} />
      </div>
      <div id="backend">
        <Skillcard skills={skills.backend} />
      </div>
      <div id="database">
        <Skillcard skills={skills.database} />
      </div>
    </div>
  );
}
