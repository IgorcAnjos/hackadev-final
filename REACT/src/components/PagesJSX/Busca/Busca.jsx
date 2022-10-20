import React from "react";

import Header from "../../Header/Header";
import ProdutoCatalogo from "../../ProdutoCatalogo/ProdutoCatalogo";
import Footer from "../../Footer/Footer";

import "./Busca.css";
import { useContext } from "react";
import { BuscaContext } from "../../../contexts/Busca";

const Busca = () => {
  const { ListaDeBusca, setBuscar } = useContext(BuscaContext);
  return (
    <div className="container-busca">
      <Header texto={"Busca"} />
      <div className="input-buscar">
        <label className="label-texto" htmlFor="input-busca">
          O que está procurando?
        </label>
        <input
          className="input"
          type="text"
          name="input-buscar"
          id="input-busca"
          size={30}
          maxLength={30}
          placeholder="Digite Aqui..."
          onChange={(event) => {
            setBuscar(event.target.value);
          }}
        />
      </div>
      <section className="flex-section">
        {ListaDeBusca.map((item) =>
          item.quantidade_p === 0 &&
          item.quantidade_m === 0 &&
          item.quantidade_g === 0 ? (
            ""
          ) : (
            <ProdutoCatalogo
              key={item.id}
              id={item.id}
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
              colunas="coluna1"
              desconto={item.desconto}
            />
          )
        )}
      </section>
      <div className="espacinho"></div>
      <Footer />
    </div>
  );
};

export default Busca;
