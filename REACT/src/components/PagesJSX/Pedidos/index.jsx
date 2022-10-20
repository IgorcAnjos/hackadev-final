import React from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import InfoPedido from "../../InfoPedido";

import "./Pedidos.css";
import { useContext } from "react";
import { InfoUsuarios } from "../../../contexts/Clientes";

const Pedidos = () => {
  const { pedidosUsuario } = useContext(InfoUsuarios);
  return (
    <main className="main-pedidos">
      <Header texto="Pedidos" />
      <section className="pedidos-status">
        {pedidosUsuario === true ? (
          <h1>Loading</h1>
        ) : pedidosUsuario === false ? (
          <h1>Erro</h1>
        ) : (
          pedidosUsuario.map((item) => (
            <InfoPedido
              key={item.idPedido}
              idPedido={item.idPedido}
              total={item.precoTotal}
              idStatus={item.idStatus}
              status={item.status}
              idFormaDePagamento={item.idFormaDePagamento}
              formaPagamento={item.formaDePagamento}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Pedidos;
