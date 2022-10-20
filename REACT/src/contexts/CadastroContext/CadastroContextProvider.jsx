import React, { useState } from "react";
import { CadastroContext } from ".";
// import useFetch from "../../Hooks/useFetch";

const CadastroContextProvider = ({ children }) => {
  const urlApi = `${process.env.REACT_APP_DEFURLAPI}usuarios/cadastro/novo`;
  const [NomeCompleto, setNomeCompleto] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Senha, setSenha] = useState(null);
  const [Pais, setPais] = useState(null);
  const [Cep, setCep] = useState(null);
  const [Endereco, setEndereco] = useState(null);
  const [Cidade, setCidade] = useState(null);
  const [Bairro, setBairro] = useState(null);
  const [Estado, setEstado] = useState(null);
  const [Complemento, setComplemento] = useState(null);

  // const objetoUsuariosCadastradosFetch = useFetch(
  //   `${process.env.REACT_APP_DEFURLAPI}usuarios`,
  //   "get"
  // );

  console.log(
    NomeCompleto,
    Email,
    Senha,
    Pais,
    Cep,
    Endereco,
    Cidade,
    Bairro,
    Estado,
    Complemento
  );

  const bodyCadastro = {
    email: Email,
    senha: Senha,
    nomeCompleto: NomeCompleto,
    pais: Pais,
    cep: Cep,
    logradouro: Endereco,
    cidade: Cidade,
    estado: Estado,
    complemento: Complemento,
  };

  return (
    <CadastroContext.Provider
      value={{
        urlApi,
        bodyCadastro,
        setBairro,
        setCep,
        setCidade,
        setComplemento,
        setEmail,
        setEndereco,
        setEstado,
        setPais,
        setSenha,
        setNomeCompleto,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export default CadastroContextProvider;
