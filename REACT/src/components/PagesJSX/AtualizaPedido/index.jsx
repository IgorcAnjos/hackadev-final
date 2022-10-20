import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AtualizaPedidoContext } from "../../../contexts/AtualizaPedido";

const AtualizaPedido = () => {
  const { idPedido, idStatus, idFormaDePagamento } = useParams();

  const { urlApi, formaDePagamento } = useContext(AtualizaPedidoContext);

  const bodyAtualizaPedido = {
    status: idStatus,
    idFormaPagamento: idFormaDePagamento,
  };

  const bodyMensagem = {
    email: JSON.parse(localStorage?.login).email,
    precoTotal: 10,
    formaDePagamento: formaDePagamento,
  };
  const [cont, setCont] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const putFetchData = (url, data) => {
    setCont(cont + 1);
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
  const postFetchData = (url, data) => {
    setCont(cont + 1);
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
      const AtualizandoPedido = putFetchData(
        `${urlApi}pedidos/info/${idPedido}`,
        bodyAtualizaPedido
      );
      AtualizandoPedido.then((resposta) => {
        if (Number(idStatus) === 2) {
          const enviaMensagem = postFetchData(
            `${urlApi}contatocliente/whatsapp/email`,
            bodyMensagem
          );
          enviaMensagem
            .then((response) => {
              console.log("sucesso");
              const enviarMensagem = postFetchData(
                `${urlApi}contatocliente/whatsapp/email`,
                bodyMensagem
              )
                .then((response) => {
                  console.log("Email enviado com sucesso");
                  setLoading(false);
                })
                .catch((err) => console.log("impossivel enviar e-mail"));
            })
            .catch((err) => console.log(err));
        }
      })
        .catch((err) => {
          setError(true);
          console.log(err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [urlApi, bodyAtualizaPedido, cont]);

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

export default AtualizaPedido;
