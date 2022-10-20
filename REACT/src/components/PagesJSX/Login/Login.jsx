import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../../contexts/Auth";

import Header from "../../Header/Header";

import "./Login.css";

const Login = () => {
  const { setEmail, setSenha } = useContext(Auth);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  return (
    <main className="login-main">
      <Header texto="Login" />
      <section className="login-section">
        <form className="login-form" action="">
          <div className="input-checkout">
            <label className="label-texto" htmlFor="email-usuario">
              E-mail
            </label>
            <input
              className="input"
              type="email"
              name="email-usuario"
              id="email-usuario"
              size="50"
              maxLength="50"
              required
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="senha-usuario">
              Senha
            </label>
            <input
              className="input"
              type="password"
              name="senha-usuario"
              id="senha-usuario"
              size="50"
              maxLength="50"
              required
              autoComplete="on"
              onChange={(e) => setLoginSenha(e.target.value)}
            />
          </div>

          <Link to="/" className="login-link">
            Esqueceu sua senha?
          </Link>

          <Link to="/" className="botao-entrar">
            <button
              className="login-btn"
              onClick={() => {
                setEmail(loginEmail);
                setSenha(loginSenha);
              }}
            >
              Entrar
            </button>
          </Link>
        </form>

        <div className="redirect-cadastro">
          <p id="ou">-ou-</p>
          <Link to="/cadastro" className="login-link">
            Ainda não é cadastrado?
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
