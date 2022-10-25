import React from "react";
import useFetch from "../../Hooks/useFetch";

const useFetchCompra = () => {
  const url = `${process.env.REACT_APP_DEFURLAPI}compras/info`;
  const method = "get";
  const objetoCompras = useFetch(url, method);

  const ListaDeCompras =
    objetoCompras.dataResponse !== null
      ? objetoCompras.dataResponse
      : objetoCompras.error !== null
      ? false
      : true;
  return ListaDeCompras;
};

export default useFetchCompra;
