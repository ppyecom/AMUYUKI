import React from "react";
import "./explorer.css";
import Card from "../../../components/home/explorer/Card";

const Explorer = () => {
  const features = [
    {
      id: "card1",
      banner: "./images/home/explorer/lenguasvivas.png",
      sub: "Lenguas Vivas",
      description:
        "Aprende palabras y expresiones en idiomas originarios de diversas regiones.",
      sections: [
        {
          id: "lenguas1",
          icon: "./images/home/explorer/icons/idioma-ex.png",
          content: "2 Lenguas",
        },
        {
          id: "lenguas2",
          icon: "./images/home/explorer/icons/region-ex.png",
          content: "1 Region",
        },
        {
          id: "lenguas3",
          icon: "./images/home/explorer/icons/comu-ex.png",
          content: "Comunidad Activa",
        },
      ],
      button: "Explorar",
    },
    {
      id: "card2",
      banner: "./images/home/explorer/saboresancestrales.png",
      sub: "Saberes Ancestrales",
      description:
        "Conoce prácticas tradicionales y su relación con el entorno natural.",
      sections: [
        {
          id: "saber1",
          icon: "./images/home/explorer/icons/relatos-ex.png",
          content: "45 relatos culturales",
        },
        {
          id: "saber2",
          icon: "./images/home/explorer/icons/pueblos-ex.png",
          content: "8 pueblos",
        },
      ],
      button: "Ver más",
    },
    {
      id: "card3",
      banner: "./images/home/explorer/artes.png",
      sub: "Arte y Simbolismo",
      description:
        "Descubre el significado de los colores, formas y símbolos que narran nuestra historia.",
      sections: [
        {
          id: "arte1",
          icon: "./images/home/explorer/icons/obras-ex.png",
          content: "60 obras",
        },
        {
          id: "arte2",
          icon: "./images/home/explorer/icons/comu-ex.png",
          content: "15 comunidades",
        },
        {
          id: "arte3",
          icon: "./images/home/explorer/icons/arte-ex.png",
          content: "Contribuye tu arte",
        },
      ],
      button: "Explorar",
    },
  ];

  return (
    <section className="explorer">
        <div className="text">
            <span className="title">Explora El Conocimiento Ancestral</span>
            <span className="sub">Descubre recursos, relatos y experiencias que te conectan con la historia viva de nuestras comunidades</span>
        </div>
      <div className="cards-explorer">
        {features.map((information) => (
          <Card
            key={information.id}
            banner={information.banner}
            sub={information.sub}
            description={information.description}
            section={information.sections}
            button={information.button}
          />
        ))}
      </div>
    </section>
  );
};

export default Explorer;
