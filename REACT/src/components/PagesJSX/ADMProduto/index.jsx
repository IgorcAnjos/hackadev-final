import { React, useContext } from "react";
import { Produtos } from "../../../contexts/Produtos";

import Header from "../../Header/Header";

import "./AdmProdutos.css";
import AdmCatalogo from "../../AdmCatalogo";
import ModalAtualizarProduto from "../../ModalAtualizarProduto";

const AdmProdutos = () => {
  const { listaDeProdutos } = useContext(Produtos);

  const produtos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;
  console.log(listaDeProdutos);
  return (
    <main className="main-adm__produtos">
      <section className="adm-produtos">
        <Header texto="Adm Produtos" />
        <section className="produtos">
          {produtos !== true ? (
            produtos.map((item) => (
              <div key={item.id}>
                <AdmCatalogo
                  id={item.id}
                  imagem={item.imagem}
                  nome={item.nome}
                  preco={item.preco}
                  qtdP={item.quantidade_p}
                  qtdM={item.quantidade_m}
                  qtdG={item.quantidade_g}
                  descricao={item.descricao}
                  desconto={item.desconto}
                />
              </div>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </section>
      </section>

      {/* <ModalAtualizarProduto /> */}
    </main>
  );
};

export default AdmProdutos;
