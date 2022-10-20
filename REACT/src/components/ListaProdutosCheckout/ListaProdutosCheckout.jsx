import React from "react";

import "./ListaProdutosCheckout.css";
function ListaProdutosCheckout({
  id,
  imagem,
  nome,
  preco,
  tamanho,
  quantidade,
}) {
  return (
    <li className="item-lista">
      <img src={imagem} alt="" />
      <div className="nome-tamanho-quantidade">
        <p className="nome">{nome}</p>
        <div className="tamanho-quantidade">
          <p className="tamanho">Tam:{tamanho}</p>
          <p className="quant">quant:{quantidade}</p>
        </div>
      </div>
      <div className="preco-lista">
        <p className="preco-produto">R$ {(quantidade * preco).toFixed(2)}</p>
      </div>
    </li>
  );
}

export default ListaProdutosCheckout;
