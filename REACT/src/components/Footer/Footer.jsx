import React from "react";
import { CgCopyright } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import logo from "./logo_kingsman.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="rodape">
      <div className="copyright">
        <CgCopyright />
        <p>Copyright</p>
      </div>
      <a
        className="git-logo"
        href="https://github.com/alveskt/HackaDev_React"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>

      <div className="desenvolvedores">
        <h3>Desenvolvido Por:</h3>
        <a
          className="links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/IgorcAnjos"
        >
          <p className="nomes">Igor Anjos</p>
        </a>
        <a
          className="links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alveskt/"
        >
          <p className="nomes">Gustavo Alves</p>
        </a>

        <a
          className="links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Gustavohc18"
        >
          <p className="nomes">Gustavo Henrique</p>
        </a>

        <img className="logo-rodape" src={logo} alt="logo-rodape" />
      </div>
    </footer>
  );
};

export default Footer;
