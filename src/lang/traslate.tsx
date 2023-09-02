export default function Translate(leng: string) {
  if (leng === "es") {
    return {
      about: {
        title: "Sobre mi",
        aboutme:
          "Soy un programador autodidacta, apasionado por la tecnología, con una gran capacidad de adaptación y una gran capacidad de trabajo en equipo. Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web",
      },

      skill: {
        title: "Habilidades",
      },
      proyect: {
        title: "Proyectos",
        description: "Lista de los proyectos en los que e trabajado",
      },
      contact: {
        title: "Contacto",
      },
    };
  } else {
    return {
      about: {
        title: "About",
        aboutme:
          "I am a self-taught programmer, passionate about technology, with a great capacity for adaptation and a great capacity for teamwork. I like to learn new technologies and develop web applications",
      },

      skill: {
        title: "Skill",
      },
      proyect: {
        title: "Proyects",
        description: "Lista de los proyectos en los que e trabajado",
      },
      contact: {
        title: "Contact",
      },
    };
  }
}
