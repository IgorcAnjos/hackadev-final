import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProdutosRelacionados from "../../ProdutosRelacionados";

import "./Produto.css";
import FacaLogin from "../../FacaLogin/FacaLogin";
import { Produtos } from "../../../contexts/Produtos";
import { CarrinhoContext } from "../../../contexts/Carrinho";

const Produto = ({ isAutenticado }) => {
  const { handleAdicaoListaCarrinnho } = useContext(CarrinhoContext);
  const { listaDeProdutos } = useContext(Produtos);

  const ListaDeProdutos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;

  const parametros = useParams();

  const idParamentro = parseInt(parametros.id);

  const findProduto =
    ListaDeProdutos !== true
      ? ListaDeProdutos.filter((produto) => produto.id === idParamentro)
      : "";

  const produto = findProduto[0];

  const login = isAutenticado();

  return (
    <div className="cont">
      <Navbar />
      <div className="espacamento"></div>
      {!login ? <FacaLogin /> : ""}

      {ListaDeProdutos !== true ? (
        <>
          <Header texto={produto.nome} />
          <div className="container-produto">
            <div className="foto-section">
              <img className="foto-produto" src={produto.imagem} alt="" />
            </div>

            <div className="informacoes">
              <div className="nome-preco-parcelas">
                <h1 className="nome">{produto.nome}</h1>
                <div className="preco-parcelas">
                  <p
                    className="preco"
                    style={
                      produto.desconto === 0
                        ? {}
                        : {
                            background: "crimson",
                            padding: "1vw",
                            color: "white",
                            borderRadius: "1vw",
                            textDecoration: " 0.2vh underline #161616",
                          }
                    }
                  >
                    R${" "}
                    {(
                      produto.preco -
                      produto.preco * (produto.desconto / 100)
                    ).toFixed(2)}
                  </p>
                  <p className="parcelas">
                    em até 3x{" "}
                    {(
                      (produto.preco -
                        produto.preco * (produto.desconto / 100)) /
                      3
                    ).toFixed(2)}{" "}
                    <s /> s/ juros
                  </p>
                </div>
              </div>
              <div className="selecao-tamnho">
                <h4 className="tamanho">Escolha o tamanho</h4>
                <select
                  defaultValue={"p"}
                  className="tamanho-input"
                  id="tamanho"
                >
                  {produto.quantidade_p !== 0 ? (
                    <option value={"p"}>P</option>
                  ) : (
                    ""
                  )}
                  {produto.quantidade_m !== 0 ? (
                    <option value={"m"}>M</option>
                  ) : (
                    ""
                  )}
                  {produto.quantidade_g !== 0 ? (
                    <option value={"g"}>G</option>
                  ) : (
                    ""
                  )}
                </select>
              </div>

              <div className="section-botao">
                <button
                  className="adicionar-sacola"
                  onClick={() => {
                    const select = document.getElementById("tamanho");
                    const tamanho = select.value;
                    handleAdicaoListaCarrinnho(produto.id, tamanho);
                  }}
                >
                  Adicionar à Sacola
                </button>
              </div>
            </div>
          </div>
          <ProdutosRelacionados
            produto={findProduto}
            ListaDeProdutos={ListaDeProdutos}
          />
        </>
      ) : (
        <h1>Loading</h1>
      )}

      <Footer />
    </div>
  );
};

export default Produto;
