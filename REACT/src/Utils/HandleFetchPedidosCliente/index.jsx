import useFetch from "../../Hooks/useFetch";

const useHandleFetchPedidosCliente = () => {
  const idCliente = JSON.parse(localStorage.login).id;
  const urlAPI = process.env.REACT_APP_DEFURLAPI;
  const method = "get";

  const objetoPedidosCliente = useFetch(
    `${urlAPI}pedidos/info/usuarios/${idCliente}`,
    method
  );

  const ListaDePedidos =
    objetoPedidosCliente.dataResponse !== null
      ? objetoPedidosCliente.dataResponse
      : objetoPedidosCliente.error !== null
      ? false
      : true;

  return ListaDePedidos;
};

export default useHandleFetchPedidosCliente;
