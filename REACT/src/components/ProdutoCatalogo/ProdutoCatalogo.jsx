import { React } from "react";
import { Link } from "react-router-dom";

import "./ProdutoCatalogo.css";

const ProdutoCatalogo = ({ id, imagem, nome, preco, colunas, desconto }) => {
  return (
    <Link to={`/produto/${id}`} className="link">
      <div
        className="item-catalogo"
        style={colunas === "coluna2" ? {} : { width: "70vw", height: "100vw" }}
      >
        <img
          className="imagem-catalogo"
          src={imagem}
          alt="Imagem Terno"
          style={colunas === "coluna2" ? {} : { height: "85%" }}
        />
        <h2
          className="nome-item"
          style={
            desconto === 0
              ? {}
              : { borderBottom: "0.5vw solid crimson", marginBottom: "0.5vh" }
          }
        >
          {nome}
        </h2>
        <div className="preco-desconto">
          <p
            className="preco-catalogo"
            style={
              desconto === 0
                ? {}
                : { textDecoration: "line-through", color: "crimson" }
            }
          >{`R$ ${Number(preco).toFixed(2)}`}</p>
          <p
            className="desconto"
            style={desconto === 0 ? { display: "none" } : {}}
          >{`R$ ${(Number(preco) - Number(preco) * (desconto / 100)).toFixed(
            2
          )}`}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProdutoCatalogo;
