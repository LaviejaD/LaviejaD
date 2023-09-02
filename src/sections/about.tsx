import { useState, useEffect } from "react";
import linkdin from "../assets/img/linkdin.png";
import github from "../assets/img/github.png";
import axios from "axios";
import transtalate from "../lang/traslate";

export default function Aboutpage({ userLang }: { userLang: string }) {
  const lang = transtalate(userLang);
  const [avatar, updateavatar] = useState("");

  useEffect(() => {
    (async () => {
      const res: any = await axios({
        url: "https://api.github.com/users/LaviejaD",
        method: "get",
      }).catch((err) => {
        console.log(err);
      });

      updateavatar(res.data.avatar_url);
    })();
  }, []);
  //
  return (
    <>
      <div
        className="aboutcontainer slide-to-center"
        onLoad={(e) =>
          setTimeout(
            () => (e.currentTarget.style.animation = "slide-to-center 1s "),
            1000
          )
        }
      >
        <div>
          <img id="avatar" src={avatar} alt="avatar" />
          <div>
            <a target="_blank" href="https://github.com/LaviejaD">
              <img className="imgredes" src={github} alt="github logo" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/">
              <img className="imgredes" src={linkdin} alt="linkedin logo" />
            </a>
          </div>
        </div>
        <div id="info">
          <h2>{userLang === "en" ? "About me" : "Sobre me"}</h2>
          <p> {lang?.about.aboutme}</p>
        </div>
      </div>
    </>
  );
}
