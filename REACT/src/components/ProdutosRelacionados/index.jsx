import React, { useState } from "react";
import "./ProdutosRelacionados.css";
import useFetchCompra from "../../Utils/handleFetchCompras";
import { useEffect } from "react";

const ProdutosRelacionados = ({ produto, ListaDeProdutos }) => {
  const [filterSelect, setFilterSelect] = useState(1);

  const ListaByCategoria = ListaDeProdutos.filter(
    (fProduto) => fProduto.id_categoria === produto[0].id_categoria
  );

  const listaByPreco = ListaDeProdutos.filter((fProduto) => {
    const fpreco = Number(
      Number(fProduto.preco) -
        Number(fProduto.preco) * (Number(fProduto.desconto) / 100)
    );

    const precoReal =
      Number(produto[0].preco) -
      Number(produto[0].preco) * (Number(produto[0].desconto) / 100);

    if (fpreco > Number(precoReal) - 500 && fpreco < Number(precoReal) + 500) {
      return fProduto;
    } else {
      return "";
    }
  });

  const [listaVisual, setListaVisual] = useState(ListaByCategoria);

  const getCompras = useFetchCompra();

  const [listaComprasRelacionadas, setListaComprasRelacionadas] = useState([]);

  useEffect(() => {
    if (typeof getCompras === "object") {
      let listaDeIdPedidos = [];
      let listaDeIdProdutos = [];
      let listaDeProdutos = [];

      getCompras.map((compra) => {
        if (compra.id_produto === produto[0].id) {
          listaDeIdPedidos.push(compra.id_pedido);
        }
        return "";
      });

      getCompras.map((compra) => {
        const match = listaDeIdPedidos.map((id) => {
          if (compra.id_pedido === id) {
            if (
              listaDeIdProdutos.indexOf(compra.id_produto) === -1 &&
              compra.id_produto !== produto[0].id
            ) {
              listaDeIdProdutos.push(compra.id_produto);
            }
          }
          return "";
        });
        return "";
      });

      listaDeIdProdutos.map((id) => {
        const fProduto = ListaDeProdutos.filter((produto) => produto.id === id);
        listaDeProdutos.push(fProduto[0]);
        return "";
      });

      setListaComprasRelacionadas(listaDeProdutos);
    }
  }, [getCompras]);

  return (
    <div className="container-produtos-relacionados">
      <div className="header-produtos-relacionados">
        <h1 className="titulo-produtos-relacionados">Produtos Relacionados</h1>
        <div className="header-opcoes">
          <p
            className="opcao-header"
            style={
              filterSelect === 1
                ? {
                    background: "#dcdfe5",
                    outline: "2px solid #161616",
                    color: "#161616",
                  }
                : {}
            }
            onClick={() => {
              if (filterSelect !== 1) {
                setFilterSelect(1);
                setListaVisual(ListaByCategoria);
              }
            }}
          >
            Categoria
          </p>
          <p
            className="opcao-header"
            style={
              filterSelect === 2
                ? {
                    background: "#dcdfe5",
                    outline: "2px solid #161616",
                    color: "#161616",
                  }
                : {}
            }
            onClick={() => {
              if (filterSelect !== 2) {
                setFilterSelect(2);
                setListaVisual(listaByPreco);
              }
            }}
          >
            Preço
          </p>
          <p
            className="opcao-header"
            style={
              filterSelect === 3
                ? {
                    background: "#dcdfe5",
                    outline: "2px solid #161616",
                    color: "#161616",
                  }
                : {}
            }
            onClick={() => {
              if (filterSelect !== 3) {
                setFilterSelect(3);
                setListaVisual(listaComprasRelacionadas);
              }
            }}
          >
            Comprado em Conjunto
          </p>
        </div>
      </div>
      <div className="lista-de-produtos-relacionados">
        {listaVisual.length > 0 ? (
          listaVisual.map((produtoRelacionado) => (
            <a
              href={`/produto/${produtoRelacionado.id}`}
              className="produto-relacionado"
              key={produtoRelacionado.id}
            >
              <img
                src={produtoRelacionado.imagem}
                alt={`Foto ${produtoRelacionado.nome}`}
                className="imagem-produto-relacionado"
              />
              <div className="nomes-preco">
                <p className="nome-produto-relacionado">
                  {produtoRelacionado.nome}
                </p>
                <div className="preco-desconto-pr">
                  <p className="preco-produto-relacionado">
                    R${" "}
                    {(
                      produtoRelacionado.preco -
                      produtoRelacionado.preco *
                        (produtoRelacionado.desconto / 100)
                    ).toFixed(2)}
                  </p>
                  <p
                    className="desconto-pr"
                    style={
                      produtoRelacionado.desconto ? {} : { display: "none" }
                    }
                  >
                    {produtoRelacionado.desconto}
                  </p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="ausencia"> Não há produtos relacionados aqui...</p>
        )}
      </div>
    </div>
  );
};

export default ProdutosRelacionados;
