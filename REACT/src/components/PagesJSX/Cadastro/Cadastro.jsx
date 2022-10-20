// import { useState, useContext } from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CadastroContext } from "../../../contexts/CadastroContext";
import Header from "../../Header/Header";

import "./Cadastro.css";

const Cadastro = () => {
  const {
    setBairro,
    setCep,
    setCidade,
    setComplemento,
    setEmail,
    setEndereco,
    setEstado,
    setPais,
    setSenha,
    setNomeCompleto,
  } = useContext(CadastroContext);

  return (
    <main className="cadastro-main">
      <Header texto="Cadastro" />
      <section className="cadastro-section">
        <form action="" id="form-cadastro">
          <div className="input-checkout">
            <label className="label-texto" htmlFor="nome-usuario">
              Nome completo
            </label>
            <input
              className="input"
              type="text"
              name="nome-usuario"
              id="nome-usuario"
              size="50"
              maxLength="50"
              required
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="email-usuario">
              E-mail
            </label>
            <input
              className="input"
              type="email"
              nome="email-usuario"
              id="email-usuario"
              size="40"
              maxLength="40"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="senha-usuario">
              Senha
            </label>
            <input
              className="input"
              type="password"
              nome="senha-usuario"
              id="senha-usuario"
              size="20"
              maxLength="20"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-pais">
              País
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-pais"
              id="endereco-pais"
              size="30"
              maxLength="30"
              required
              onChange={(e) => setPais(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-cep">
              CEP
            </label>
            <input
              className="input"
              type="tel"
              nome="endereco-cep"
              id="endereco-cep"
              maxLength="8"
              required
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco">
              Endereço
            </label>
            <input
              className="input"
              type="text"
              nome="endereco"
              id="endereco"
              size="50"
              maxLength="50"
              required
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-cidade">
              Cidade
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-cidade"
              id="endereco-cidade"
              size="30"
              maxLength="30"
              required
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-bairro">
              Bairro
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-bairro"
              id="endereco-bairro"
              size="30"
              maxLength="30"
              required
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-estado">
              Estado
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-estado"
              id="endereco-estado"
              size="2"
              maxLength="2"
              required
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-complemento">
              Complemento
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-complemento"
              id="endereco-complemento"
              size="50"
              maxLength="50"
              required
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className="enviar-cadastro">
            <Link to="/cadastro/geracadastro">
              <button
                className="enviar-button"
                onClick={() => {
                  // c
                }}
              >
                Enviar
              </button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
