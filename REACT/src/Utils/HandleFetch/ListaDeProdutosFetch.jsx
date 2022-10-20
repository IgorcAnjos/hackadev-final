import useFetch from "../../Hooks/useFetch";

const useListaDeProdutosFetch = () => {
  const url =
    `${process.env.REACT_APP_DEFURLAPI}produtos/info` ??
    "http://localhost/produtos/info";

  const method = "get";
  const objetoDeProduto = useFetch(url, method);

  const ListaDeProdutos =
    objetoDeProduto.dataResponse !== null
      ? objetoDeProduto.dataResponse
      : objetoDeProduto.error !== null
      ? false
      : true;

  return ListaDeProdutos;
};

export default useListaDeProdutosFetch;
