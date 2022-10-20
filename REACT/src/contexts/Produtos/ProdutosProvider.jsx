import React from "react";
import { Produtos } from ".";
import useListaDeProdutosFetch from "../../Utils/HandleFetch/ListaDeProdutosFetch";

const ProdutosProvider = ({ children }) => {
  const listaDeProdutos = useListaDeProdutosFetch();

  return (
    <Produtos.Provider value={{ listaDeProdutos }}>
      {children}
    </Produtos.Provider>
  );
};

export default ProdutosProvider;
