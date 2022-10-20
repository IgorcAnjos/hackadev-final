import React from "react";
import { Link } from "react-router-dom";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";

import "./FacaLogin.css";

function FacaLogin() {
  return (
    <div className="container-flex-faca-login">
      <div className="texto-faca-login">
        <p>Faça Login ou Cadastre-se para ter uma Experiência Completa</p>
      </div>
      <div className="icone-texto-facalogin">
        <Link to={"/login"} className="flex-icon-login-cadastro">
          <FiUserCheck />
          <p className="texto-login-cadatro">Login</p>
        </Link>
        <Link to={"/cadastro"} className="flex-icon-login-cadastro">
          <FiUserPlus />
          <p className="texto-login-cadatro">Cadastre-se</p>
        </Link>
      </div>
    </div>
  );
}

export default FacaLogin;
