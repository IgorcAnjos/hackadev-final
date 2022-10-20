import React, { useState } from "react";

import ListaProdutosCheckout from "../ListaProdutosCheckout/ListaProdutosCheckout";

import "./DetalhesCompra.css";

function DetalhesCompra({ listaCarrinho }) {
  const [abrirDetalhes, setAbrirDetalhes] = useState(false);
  let total = 0;
  listaCarrinho.map((produto) => (total += produto.quantidade * produto.preco));
  return (
    <section className="detalhes-da-compra">
      <div
        className="botao-detalhes-da-compra"
        id="botao-detalhes-da-compra"
        onClick={() => {
          setAbrirDetalhes(!abrirDetalhes);
        }}
      >
        <p>Detalhes da Compra</p>
      </div>
      <ul className="lista-produtos" id="lista-produtos">
        {abrirDetalhes
          ? listaCarrinho.map((produto) => (
              <ListaProdutosCheckout
                key={produto.id}
                id={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                tamanho={produto.tamanho}
                quantidade={produto.quantidade}
              />
            ))
          : ""}
      </ul>
      <div className="botao-detalhes-da-compra">
        <p className="total">Total: R$ {total.toFixed(2)}</p>
      </div>
    </section>
  );
}

export default DetalhesCompra;
