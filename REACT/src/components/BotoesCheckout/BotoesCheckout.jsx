import React, { useContext } from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { IoMdBarcode } from "react-icons/io";

import "./BotoesCheckout.css";
import { InfoUsuarios } from "../../contexts/Clientes";

function BotoesCheckout({ formaDePagamento, setFormaDePagamento }) {
  return (
    <section className="formulario formas-pagamento">
      <div className="texto-descricao">
        <p className="formas-de-pagamento">Formas de pagamento</p>
      </div>
      <div className="select-formas-pagamento">
        <ul className="lista formas-pagamento">
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="cartao-credito"
              style={
                formaDePagamento === 1
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento(1);
              }}
            >
              <BsFillCreditCard2FrontFill className="i" />
              <p className="texto-forma-pagamento">Cartão de Crédito</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="boleto"
              style={
                formaDePagamento === 2
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento(2);
              }}
            >
              <IoMdBarcode className="i" />
              <p className="texto-forma-pagamento">Boleto</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="pix"
              style={
                formaDePagamento === 3
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento(3);
              }}
            >
              <MdOutlineMobileFriendly className="i" />
              <p className="texto-forma-pagamento">PIX</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BotoesCheckout;
