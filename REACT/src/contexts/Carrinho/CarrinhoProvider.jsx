import React, { useContext, useState, useEffect } from "react";
import { CarrinhoContext } from ".";
import { Produtos } from "../Produtos";

const CarrinhoProvider = ({ children }) => {
  const { listaDeProdutos } = useContext(Produtos);

  const ListaDeProdutos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;

  // Funções pertinentes a lista de carrinho, adicionar subtrair e verificar todas estas ações

  const [listaCarrinho, setListaCarrinho] = useState(
    localStorage.listaCarrinho ? JSON.parse(localStorage.listaCarrinho) : []
  );

  const handleAdicaoListaCarrinnho = (id, tamanho) => {
    const idClick = `${id}${tamanho}`;

    const produtoExiste = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    const equivalencia = ListaDeProdutos.filter(
      (produto) => produto.id === parseInt(id)
    );

    const equivalenciaQuantidadeTamanho = `quantidade_${tamanho}`;

    if (produtoExiste.length > 0) {
      if (
        produtoExiste[0].quantidade <
        equivalencia[0][equivalenciaQuantidadeTamanho]
      ) {
        const indexProduto = listaCarrinho.indexOf(produtoExiste[0]);

        listaCarrinho[indexProduto].quantidade =
          produtoExiste[0].quantidade + 1;
        const novaListaCarrinho = [...listaCarrinho];

        setListaCarrinho(novaListaCarrinho);
      }
    } else {
      const findProduto = ListaDeProdutos.filter(
        (produto) => produto.id === id
      )[0];

      const novoProduto = {
        id: idClick,
        imagem: findProduto.imagem,
        nome: findProduto.nome,
        preco:
          findProduto.preco - findProduto.preco * (findProduto.desconto / 100),
        tamanho: tamanho,
        quantidade: 1,
      };

      const novaListaCarrinho = [...listaCarrinho, novoProduto];
      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleSubtracaoListaCarrinnho = (idClick) => {
    const findProduto = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    if (findProduto[0].quantidade !== 1) {
      const indexProduto = listaCarrinho.indexOf(findProduto[0]);

      listaCarrinho[indexProduto].quantidade = findProduto[0].quantidade - 1;
      const novaListaCarrinho = [...listaCarrinho];

      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleExcluirListaCarrinnho = (idClick) => {
    const novaListaCarrinho = listaCarrinho.filter(
      (produto) => produto.id !== idClick
    );

    setListaCarrinho(novaListaCarrinho);
  };

  const handleZerarCarrinho = () => {
    setListaCarrinho([]);
  };

  // Funções pertinentes ao subtotal da soma de todos os produtos no carrinho
  const [subTotal, setSubTotal] = useState(0);

  const handleSubTotal = (listaCarrinho) => {
    let soma = 0;

    listaCarrinho.map(
      (produto) => (soma += produto.preco * produto.quantidade)
    );
    setSubTotal(soma.toFixed(2));
  };

  useEffect(() => {
    handleSubTotal(listaCarrinho);
    localStorage.listaCarrinho = JSON.stringify(listaCarrinho);
  }, [listaCarrinho]);

  // Zerar carrinho

  const zeraCarrinho = () => {
    setListaCarrinho([]);
  };
  return (
    <CarrinhoContext.Provider
      value={{
        listaCarrinho,
        handleAdicaoListaCarrinnho,
        handleSubtracaoListaCarrinnho,
        handleExcluirListaCarrinnho,
        subTotal,
        zeraCarrinho,
        handleZerarCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
