import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Header from "../../Header/Header";
import BotoesCheckout from "../../BotoesCheckout/BotoesCheckout";
import PagamentoCartao from "../../PagamentoCartao/PagamentoCartao";
import DetalhesCompra from "../../DetalhesCompra/DetalhesCompra";

import "./Checkout.css";

import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/Carrinho";
import { useEffect } from "react";

const Checkout = () => {
  const { listaCarrinho } = useContext(CarrinhoContext);
  const [formaDePagamento, setFormaDePagamento] = useState(1);
  useEffect(() => {
    localStorage.pagamento = JSON.stringify(formaDePagamento);
  }, [formaDePagamento]);

  const UsuarioLogado = localStorage.login
    ? JSON.parse(localStorage.login)
    : false;
  // console.log(UsuarioLogado);
  const email = UsuarioLogado ? UsuarioLogado.email : "";
  return (
    <div className="checkout-container">
      <Header texto="Seu Pedido" />
      <div className="secao-usuario">
        <p className="titulo">Usuário:</p>
        <p className="email">{email}</p>
      </div>
      <BotoesCheckout
        setFormaDePagamento={setFormaDePagamento}
        formaDePagamento={formaDePagamento}
      />
      {formaDePagamento === 1 ? (
        <PagamentoCartao listaCarrinho={listaCarrinho} />
      ) : (
        ""
      )}
      <DetalhesCompra listaCarrinho={listaCarrinho} />
      <section className="finalizar-compra">
        <Link
          to={`/checkout/gerapedido/${formaDePagamento}`}
          className="comprar"
        >
          <button className="botao-comprar">Finalizar Pedido</button>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;
