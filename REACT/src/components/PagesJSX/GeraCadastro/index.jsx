import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CadastroContext } from "../../../contexts/CadastroContext";

const GeraCadastro = () => {
  const { urlApi, bodyCadastro } = useContext(CadastroContext);
  const [cont, setCont] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // console.log(Pedido);
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
      const EnviandoCadastro = postFetchData(urlApi, bodyCadastro);
      EnviandoCadastro.then((resposta) => {
        setLoading(false);
      }).catch((err) => {
        console.log(err.message);
      });
    }
  }, [urlApi, bodyCadastro, cont]);

  return (
    <>
      {error === true ? (
        <h1>Houve um erro</h1>
      ) : loading === true ? (
        <h1>Gerando seu pedido</h1>
      ) : (
        <Navigate to={`/login`} replace />
      )}
    </>
  );
};

export default GeraCadastro;
