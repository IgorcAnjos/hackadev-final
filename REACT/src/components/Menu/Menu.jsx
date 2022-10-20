import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosClose } from "react-icons/io";

import "./Menu.css";
import { useContext } from "react";
import { BuscaContext } from "../../contexts/Busca";

const Menu = ({ abrirMenu, setAbrirMenu }) => {
  const { setBuscar } = useContext(BuscaContext);
  const [largura, setLargura] = useState(window.innerWidth);

  const isAutenticado = () => {
    if (localStorage.login === undefined) {
      return false;
    } else {
      const autenticado =
        JSON.parse(localStorage.login).id &&
        JSON.parse(localStorage.login).token
          ? true
          : false;
      return autenticado;
    }
  };

  const email = isAutenticado()
    ? JSON.parse(localStorage.login).email
    : "Perfil";

  const fetchLarguraAtual = () => {
    const novaLargura = window.innerWidth;
    setLargura(novaLargura);
  };

  window.addEventListener("resize", fetchLarguraAtual);

  useEffect(() => {
    if (largura >= 900) {
      setAbrirMenu(true);
    } else {
      setAbrirMenu(false);
    }
  }, [largura, setAbrirMenu]);

  return abrirMenu ? (
    <section className="sombra">
      <div
        id="fundo-sair-menu"
        onClick={() => {
          setAbrirMenu(!abrirMenu);
        }}
      ></div>
      <nav className="navbar-secundaria">
        <ul className="lista">
          <div className="topo">
            <section id="opcoes">
              <li id="fechar" className="navbar item">
                <IoIosClose
                  onClick={() => {
                    setAbrirMenu(false);
                  }}
                />
                <div></div>
                <img
                  src="https://media.discordapp.net/attachments/998358787507376228/998361355700670504/kingsman4.png?width=400&height=400"
                  alt=""
                />
                <div></div>
                <div></div>
              </li>
            </section>
            <section id="login">
              <li className="navbar item">
                {!isAutenticado() ? (
                  <Link to="/login">
                    <p className="navbar-text">ENTRAR</p>
                  </Link>
                ) : (
                  <Link to="/usuario">
                    <p className="navbar-text">{email}</p>
                  </Link>
                )}
              </li>
            </section>
            <section id="buscar">
              <li className="navbar item">
                <Link to="/busca">
                  <p className="navbar-text">BUSCAR</p>
                </Link>
              </li>
            </section>
            <div className="barra-separacao"></div>
            <section id="categoria">
              <li id="categoria-texto-li" className="navbar item">
                <a href={"/"}>
                  <p id="text-categoria" className="navbar-text">
                    CATEGORIAS
                  </p>
                </a>
              </li>
              <div id="categorias">
                <li className="navbar item">
                  <Link
                    to="/busca"
                    onClick={() => {
                      setBuscar("Blazer");
                    }}
                  >
                    <p className="navbar-text">Blazers</p>
                  </Link>
                </li>
                <li className="navbar item">
                  <Link
                    to="/busca"
                    onClick={() => {
                      setBuscar("modern fit");
                    }}
                  >
                    <p className="navbar-text">Modern Fit</p>
                  </Link>
                </li>
                <li className="navbar item">
                  <Link
                    to="/busca"
                    onClick={() => {
                      setBuscar("smoking");
                    }}
                  >
                    <p className="navbar-text">Smoking´s</p>
                  </Link>
                </li>
                <li className="navbar item">
                  <Link
                    to="/busca"
                    onClick={() => {
                      setBuscar("terno conjunto");
                    }}
                  >
                    <p className="navbar-text">Ternos Conjunto</p>
                  </Link>
                </li>
              </div>
            </section>
            <div className="barra-separacao"></div>
            <section id="promocoes">
              <li className="navbar item">
                <Link
                  to="/busca"
                  onClick={() => {
                    setBuscar("promocao");
                  }}
                >
                  <p className="navbar-text">PROMOÇÕES</p>
                </Link>
              </li>
            </section>
            <div className="barra-separacao"></div>
            <section id="duvidas-sac">
              <li className="navbar item">
                <a href={"/"}>
                  <p className="navbar-text">DÚVIDAS E SAC</p>
                </a>
              </li>
            </section>
            <div className="barra-separacao"></div>
          </div>

          <div className="baixo">
            <li className="navbar item">
              <a href={"/"}>
                {/* <!-- <p className="navbar-text" id="kingsman">KingsMan</p> --> */}
                <img
                  src="https://media.discordapp.net/attachments/998358787507376228/998361355700670504/kingsman4.png?width=400&height=400"
                  alt=""
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  ) : (
    ""
  );
};

export default Menu;
