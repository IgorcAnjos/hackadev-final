import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import "./ProdutoPorPedido.css";
import useHandleFetchProdutosByPedidoId from "../../../Utils/HandleFetchProdutosByPedidoId";

const ProdutoPorPedido = () => {
  const parametro = useParams();
  const idPedido = parametro.id;
  const listaDeProdutosByPedidosId = useHandleFetchProdutosByPedidoId(idPedido);

  return (
    <main className="main-ppp">
      <section className="detalhes-pedido">
        <Header texto={`Pedido ${idPedido}`} />
        <section className="tabela-pedido">
          <table className="tabela-detalhes">
            <thead>
              <tr>
                <td className="titulo-tabela">Qtd.</td>
                <td className="titulo-tabela">Nome</td>
                <td className="titulo-tabela">Tam.</td>
                <td className="titulo-tabela">SubTotal</td>
              </tr>
            </thead>
            <tbody>
              {listaDeProdutosByPedidosId === true ? (
                <td colSpan={4}>Loading</td>
              ) : listaDeProdutosByPedidosId === false ||
                listaDeProdutosByPedidosId.length === 0 ? (
                <td colSpan={4}>Erro</td>
              ) : (
                listaDeProdutosByPedidosId.map((item) => (
                  <tr>
                    <td>{item.quantidade}</td>
                    <td>{item.nome}</td>
                    <td>{String(item.tamanho).toUpperCase()}</td>
                    <td>
                      R${" "}
                      {Number(
                        String(item.preco_subtotal)
                          .substring(1, item.preco_subtotal.length)
                          .replace(",", "")
                      ).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default ProdutoPorPedido;
