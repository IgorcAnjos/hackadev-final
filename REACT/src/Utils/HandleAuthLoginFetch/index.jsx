import useFetch from "../../Hooks/useFetch";

const useHandleAuthLoginFetch = (email, senha) => {
  const urlApi = process.env.REACT_APP_DEFURLAPI;
  const url = `${urlApi}login/${email}/${senha}`;
  const method = "get";

  const objetoFetchLogin = useFetch(url, method);

  const response =
    objetoFetchLogin.dataResponse !== null
      ? objetoFetchLogin.dataResponse
      : objetoFetchLogin.error !== null
      ? false
      : true;

  return response;
};

export default useHandleAuthLoginFetch;
