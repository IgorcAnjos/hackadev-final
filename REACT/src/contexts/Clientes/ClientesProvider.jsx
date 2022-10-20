import { useState } from "react";
import { InfoUsuarios } from ".";
import useHandleFetchPedidosCliente from "../../Utils/HandleFetchPedidosCliente";

const InfoUsuariosProvider = ({ children }) => {
  const pedidosUsuario = useHandleFetchPedidosCliente();

  return (
    <InfoUsuarios.Provider
      value={{
        pedidosUsuario,
      }}
    >
      {" "}
      {children}
    </InfoUsuarios.Provider>
  );
};

export default InfoUsuariosProvider;
