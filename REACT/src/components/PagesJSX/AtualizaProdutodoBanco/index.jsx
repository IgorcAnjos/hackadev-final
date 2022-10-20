import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AtualizaProdutoContext } from "../../../contexts/AtualizaProduto";

const AtualizaProdutoBanco = () => {
  const { urlApi, idProduto, bodyUpdate } = useContext(AtualizaProdutoContext);
  const [cont, setCont] = useState(0);
  console.log(urlApi, idProduto, bodyUpdate);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const postFetchData = (url, data) => {
    setCont(cont + 1);
    console.log(cont);
    const postFetchData = async () => {
      const resposta = await axios
        .put(url, data)
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
      const EnviandoCadastro = postFetchData(
        `${urlApi}produtos/atualizar/${idProduto}`,
        bodyUpdate
      );
      EnviandoCadastro.then((resposta) => {
        setLoading(false);
      }).catch((err) => {
        console.log(err.message);
      });
    }
  }, [urlApi, bodyUpdate, cont]);

  return (
    <>
      {error === true ? (
        <h1>Houve um erro</h1>
      ) : loading === true ? (
        <h1>Gerando seu pedido</h1>
      ) : (
        <Navigate to={`/usuario`} replace />
      )}
    </>
  );
};

export default AtualizaProdutoBanco;
