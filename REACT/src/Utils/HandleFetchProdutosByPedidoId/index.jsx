import useFetch from "../../Hooks/useFetch";

const useHandleFetchProdutosByPedidoId = (idPedido) => {
  const urlAPI = process.env.REACT_APP_DEFURLAPI;
  const method = "get";

  const objetoProdutosByPedidoId = useFetch(
    `${urlAPI}pedidos/info/produtos/${idPedido}`,
    method
  );

  const listaDeProdutosByPedidosId =
    objetoProdutosByPedidoId.dataResponse !== null
      ? objetoProdutosByPedidoId.dataResponse
      : objetoProdutosByPedidoId.error !== null
      ? false
      : true;
  return listaDeProdutosByPedidosId;
};

export default useHandleFetchProdutosByPedidoId;
