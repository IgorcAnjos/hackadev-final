import React, { useContext, useState, useEffect } from "react";
import { BuscaContext } from ".";
import { Produtos } from "../Produtos";

const BuscaProvider = ({ children }) => {
  const { listaDeProdutos } = useContext(Produtos);

  const ListaDeProdutos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;

  const [ListaDeBusca, SetListaDeBusca] = useState([]);
  const [buscar, setBuscar] = useState("promocao");

  useEffect(() => {
    if (ListaDeProdutos !== true) {
      if (buscar !== "promocao") {
        const novaListaProdutos = ListaDeProdutos.filter((produto) =>
          produto.nome.toLowerCase().includes(buscar.toLowerCase())
        );
        SetListaDeBusca(novaListaProdutos);
      } else {
        const novaListaProdutos = ListaDeProdutos.filter(
          (produto) => produto.desconto > 0
        );
        SetListaDeBusca(novaListaProdutos);
      }
    }
  }, [buscar, ListaDeProdutos]);
  return (
    <BuscaContext.Provider value={{ setBuscar, ListaDeBusca, buscar }}>
      {children}
    </BuscaContext.Provider>
  );
};

export default BuscaProvider;
