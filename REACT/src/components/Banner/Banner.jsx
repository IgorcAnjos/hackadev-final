import React from "react";

import "./Banner.css";

import foto1 from "./foto1.jpeg";
import foto2 from "./foto2.jpeg";
import foto3 from "./foto3.jpeg";

const Banner = () => {
  return (
    <section className="carrousel">
      <div className="imagens-carrousel">
        <img className="itens-carrousel" src={foto1} alt="foto1" />
        <img className="itens-carrousel" src={foto2} alt="foto2" />
        <img className="itens-carrousel" src={foto3} alt="foto3" />
        <img className="itens-carrousel" src={foto1} alt="foto1" />
      </div>
    </section>
  );
};
export default Banner;
