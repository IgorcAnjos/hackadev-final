import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import Menu from "../Menu/Menu";
import Carrinho from "../Carrinho/Carrinho";

import "./Navbar.css";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/Carrinho";

const Navbar = ({ login }) => {
  const { listaCarrinho } = useContext(CarrinhoContext);
  let totalNoCarrinho = 0;
  listaCarrinho.map((produto) => (totalNoCarrinho += produto.quantidade));
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [abrirCarrinho, setAbrirCarrinho] = useState(false);
  return (
    <>
      <nav className="navbar-principal">
        <ul className="lista">
          <li id="menu" className="navbar item">
            <FaBars
              onClick={() => {
                setAbrirMenu(!abrirMenu);
              }}
            />
          </li>

          <li className="navbar item">
            <Link to={"/"}>
              <img
                src="https://media.discordapp.net/attachments/998358787507376228/998359187627200522/kingsman.png?width=400&height=400"
                alt=""
              />
              <p className="navbar-text"></p>
            </Link>
          </li>

          <li
            className="navbar item"
            onClick={() => {
              setAbrirCarrinho(!abrirCarrinho);
            }}
          >
            <FiShoppingBag />
            <div
              className="item-na-sacola"
              style={listaCarrinho.length === 0 ? { display: "none" } : {}}
            >
              <p id="quantidade">{totalNoCarrinho}</p>
            </div>
          </li>
        </ul>
      </nav>
      <Menu abrirMenu={abrirMenu} setAbrirMenu={setAbrirMenu} />
      <Carrinho
        abrirCarrinho={abrirCarrinho}
        setAbrirCarrinho={setAbrirCarrinho}
        totalNoCarrinho={totalNoCarrinho}
      />
    </>
  );
};

export default Navbar;
