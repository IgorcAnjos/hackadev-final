import React from "react";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "./Header.css";

const Header = ({ texto }) => {
  const history = useNavigate();
  return (
    <div className="header">
      <header className="sair-descricao">
        <div onClick={() => history(-1)}>
          <IoIosArrowBack className="icone-sair" />
        </div>

        <p className="texto-descricao">{texto}</p>
      </header>
    </div>
  );
};

export default Header;
