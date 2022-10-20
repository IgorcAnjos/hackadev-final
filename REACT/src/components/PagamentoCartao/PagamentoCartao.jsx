import React from "react";

import InputCheckout from "../InputCheckout/InputCheckout";

import "./PagamentoCartao.css";

function PagamentoCartao({ listaCarrinho }) {
  let total = 0;
  listaCarrinho.map((produto) => (total += produto.quantidade * produto.preco));

  return (
    <section className="pagamento" id="pagamento-cartao-credito">
      <fieldset className="formulario-pagamento">
        <div className="entrada numero-cartao">
          <InputCheckout
            texto="Número do Cartão"
            type="tel"
            nome="numero-cartao"
            id="num-cartao"
            size="16"
            maxlength="16"
          />
        </div>
        <div className="entrada nome-titular">
          <InputCheckout
            texto="Nome do Titular"
            type="tel"
            nome="nome titular"
            id="nome-titular"
            size="50"
            maxlength="50"
          />
        </div>
        <section className="validade">
          <div className="entrada-mes">
            <label
              className="texto-informacao-cartao"
              htmlFor="validade-mes-cartao"
            >
              Mês
            </label>
            <select className="validade-mes-cartao">
              <option>MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="entrada-ano">
            <label
              className="texto-informacao-cartao"
              htmlFor="validade-ano-cartao"
            >
              Ano
            </label>
            <select className="validade-ano-cartao">
              <option>AA</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
            </select>
          </div>
          <div className="entrada-codigo-verificacao">
            <label
              className="texto-informacao-cartao"
              htmlFor="codigo-verificacao"
            >
              CVV
            </label>
            <input type="number" placeholder="CVV" id="codigo-verificacao" />
          </div>
        </section>
        <div className="entrada-parcelas">
          <label className="texto-informacao-cartao" htmlFor="parcelas">
            Parcelas
          </label>

          <select className="parcelas-cartao" id="parcelas">
            <option defaultValue="1">1x de R$ {total.toFixed(2)}</option>
            <option value="2">2x de R$ {(total / 2).toFixed(2)}</option>
            <option value="3">3x de {(total / 3).toFixed(2)}</option>
            <option value="3">4x de {((total * 1.1) / 4).toFixed(2)}</option>
            <option value="3">5x de {((total * 1.15) / 5).toFixed(2)}</option>
            <option value="3">6x de {((total * 1.2) / 6).toFixed(2)}</option>
            <option value="3">7x de {((total * 1.25) / 7).toFixed(2)}</option>
            <option value="3">8x de {((total * 1.3) / 8).toFixed(2)}</option>
            <option value="3">9x de {((total * 1.35) / 9).toFixed(2)}</option>
            <option value="3">10x de {((total * 1.4) / 10).toFixed(2)}</option>
            <option value="3">11x de {((total * 1.45) / 11).toFixed(2)}</option>
            <option value="3">12x de {((total * 1.5) / 12).toFixed(2)}</option>
          </select>
        </div>
      </fieldset>
    </section>
  );
}

export default PagamentoCartao;
