import axios from "axios";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CarrinhoContext } from "../../../contexts/Carrinho";
import { GeraPedidoContext } from "../../../contexts/GeraPedido";

const GeraPedido = () => {
  const [cont, setCont] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { urlAPI, Pedido, ProdutosPedidos } = useContext(GeraPedidoContext);
  const { handleZerarCarrinho } = useContext(CarrinhoContext);

  // console.log(Pedido);
  const postFetchData = (url, data) => {
    setCont(cont + 1);
    console.log(cont);
    const postFetchData = async () => {
      const resposta = await axios
        .post(url, data)
        .then((response) => {
          return response.data;
        })
        .catch(() => {
          return false;
        });
      return resposta;
    };

    const fetchData = async () => {
      return await postFetchData();
    };

    return fetchData();
  };
  useEffect(() => {
    if (cont === 0) {
      const objetoIdPedidoInserido = postFetchData(`${urlAPI}pedidos/novo`, {
        idUsuario: Pedido.idUsuario,
        precoTotal: Pedido.precoTotal,
        idFormaPagamento: Pedido.idFormaDePagamento,
      });
      objetoIdPedidoInserido
        .then((resposta) => {
          console.log(resposta);
          const produtoInserido = postFetchData(
            `${urlAPI}pedidos/produtos/novo/${resposta.id}`,
            ProdutosPedidos
          );
          produtoInserido
            .then((resposta) => {
              console.log("sucesso");
              handleZerarCarrinho();
              setLoading(false);
            })
            .catch((err) => {
              setError(true);
              console.log("Fracasso");
            });
        })
        .catch((err) => {
          setError(true);
        });
    }
  }, []);

  return (
    <>
      {error === true ? (
        <h1>Houve um erro</h1>
      ) : loading === true ? (
        <h1>Gerando seu pedido</h1>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};

export default GeraPedido;
