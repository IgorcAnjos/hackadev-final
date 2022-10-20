import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

import "./InfoPedido.css";
import { useContext } from "react";
import { AtualizaPedidoContext } from "../../contexts/AtualizaPedido";

const InfoPedido = ({
  idPedido,
  total,
  status,
  formaPagamento,
  idStatus,
  idFormaDePagamento,
}) => {
  const { setStatus } = useContext(AtualizaPedidoContext);

  const precoTotal = String(total).substring(1, total.length).replace(",", "");
  return (
    <main className="pedido-info">
      <div className="secao-pedido">
        <h2 className="text-pedidos">Pedido nº {idPedido}</h2>
        <h2 className="text-pedidos">
          Total: R$ {Number(precoTotal).toFixed(2)}{" "}
        </h2>
        <h2 className="text-pedidos">{formaPagamento}</h2>
        <h2
          className="text-pedidos"
          style={{
            backgroundColor:
              status === "Finalizado"
                ? "green"
                : status === "Cancelado"
                ? "#d53815"
                : "yellow",
          }}
        >
          {status}
        </h2>
        <Link className="link-pedido" to={`/pedidos/Detalhes/${idPedido}`}>
          <h2>Detalhes</h2>
        </Link>
      </div>
      <div
        style={status === "Pendente" ? {} : { display: "none" }}
        className="botao-finalizar-cancelar"
      >
        {" "}
        <Link
          to={`/usuario/pedidos/atualizar/${idPedido}/${2}/${idFormaDePagamento}`}
        >
          <button className="botao-pedidos-finalizar">
            <MdOutlineVerified />
          </button>
        </Link>
        <Link
          to={`/usuario/pedidos/atualizar/${idPedido}/${3}/${idFormaDePagamento}`}
        >
          <button className="botao-pedidos-cancelar">
            <FcCancel />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default InfoPedido;
