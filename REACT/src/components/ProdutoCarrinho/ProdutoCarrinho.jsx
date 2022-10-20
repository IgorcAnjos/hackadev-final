import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../../contexts/Carrinho";
import { Produtos } from "../../contexts/Produtos";

import "./ProdutoCarrinho.css";

function ProdutoCarrinho({ produto }) {
  const {
    handleAdicaoListaCarrinnho,
    handleSubtracaoListaCarrinnho,
    handleExcluirListaCarrinnho,
  } = useContext(CarrinhoContext);
  const { listaDeProdutos } = useContext(Produtos);

  const ListaDeProdutos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;

  const novoid =
    produto.id.length === 3 ? produto.id.substring(0, 2) : produto.id[0];

  const produtoEquivalente = ListaDeProdutos.filter(
    (item) => item.id === parseInt(novoid)
  );

  const equivalenciaQuantidadeTamanho = `quantidade_${produto.tamanho}`;
  return (
    <section className="produto">
      <div className="foto-exclusao">
        <Link to={`/produto/${novoid}/`}>
          <img className="foto-produto" src={produto.imagem} alt="" />
        </Link>
        <p
          className="texto-remover"
          onClick={() => {
            handleExcluirListaCarrinnho(produto.id);
          }}
        >
          Remover item
        </p>
      </div>
      <div className="nome-tamanho-preco-quantidade">
        <p className="nome-produto">{produto.nome}</p>
        <div className="tamanho-preco">
          <p className="tamanho">Tam: {produto.tamanho}</p>
          <p className="preco">R$ {produto.preco}</p>
        </div>
        <div className="quantidade">
          <button
            className="menos-mais"
            onClick={() => {
              handleSubtracaoListaCarrinnho(produto.id);
            }}
            style={
              produto.quantidade === 1 ? { border: "1px solid crimson" } : {}
            }
          >
            -
          </button>
          <p className="numero-quantidade">{produto.quantidade}</p>
          <button
            className="menos-mais"
            onClick={() => {
              handleAdicaoListaCarrinnho(novoid, produto.tamanho);
            }}
            style={
              produto.quantidade >=
              produtoEquivalente[0][equivalenciaQuantidadeTamanho]
                ? { border: "1px solid crimson" }
                : {}
            }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProdutoCarrinho;
