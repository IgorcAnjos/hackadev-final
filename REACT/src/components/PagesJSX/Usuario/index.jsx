import React from "react";
import { Link } from "react-router-dom";

import { GiQueenCrown } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import "./Usuario.css";

const Usuario = () => {
  const email = JSON.parse(localStorage.login).email;
  const admin = JSON.parse(localStorage.login).admin;

  return (
    <main className="main">
      <section className="user-main">
        <Header texto="Usuario" />
        <section className="perfil">
          <GiQueenCrown className="icone-coroa" />
          <h2 className="nome-perfil">{email}</h2>
        </section>
        <section className="principal">
          <div className="dados-user pessoais">
            <p>Dados Pessoais</p>
            <Link className="link-user" to="#">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
          <div className="dados-user endereco">
            <p>Endereço</p>
            <Link className="link-user" to="#">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
          <div className="dados-user pedidos">
            <p>Pedidos</p>
            <Link className="link-user" to="/usuario/pedidos">
              <GiMagnifyingGlass className="icone icone-lupa" />
            </Link>
          </div>
          <div
            className="dados-user pedidos"
            style={{ display: admin === null ? "flex" : "none" }}
          >
            <p>Adm Produtos</p>
            <Link className="link-user" to="/usuario/adm/produtos">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
          <div
            className="dados-user pedidos"
            style={{ display: admin === null ? "flex" : "none" }}
          >
            <p>Adm Usuários</p>
            <Link className="link-user" to="/usuario/adm/usuariosEdit">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Usuario;
