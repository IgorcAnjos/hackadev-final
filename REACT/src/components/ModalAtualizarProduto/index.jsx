import React from "react";
import { GrFormClose } from "react-icons/gr";

import "./ModalAtualizarProduto.css";

const ModalAtualizarProduto = ({
  modalIsOpen,
  setIsOpen,
  id,
  imagem,
  nome,
  preco,
  qtdM,
  qtdP,
  qtdG,
  descricao,
  desconto,
}) => {
  return (
    <div
      className="background-blur"
      style={modalIsOpen ? { display: "flex" } : { display: "none" }}
    >
      <section className="popup">
        <header>
          <div className="header-fechar-produto-id">
            <GrFormClose className="fechar-popup" onClick={setIsOpen} />
            <p className="produto-id">ID:{id}</p>
          </div>
        </header>
        <section className="produto-infos">
          <img
            className="imagem-produto-modal"
            src="https://media.discordapp.net/attachments/1008727983223230494/1008742675383595078/unknown.png?width=398&height=642"
            alt="ImagemProduto"
          />
          <form className="form-modal">
            <label className="label-produto-modal" htmlFor="nome-produto">
              Nome
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="nome-produto"
              id="nome-produto"
              maxLength="50"
              required
            />
            <label className="label-produto-modal" htmlFor="preco-produto">
              Preço
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="preco-produto"
              id="preco-produto"
              maxLength="50"
              required
            />
            <label className="label-produto-modal" htmlFor="descrição-produto">
              Descrição
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="descrição-produto"
              id="descrição-produto"
              maxLength="50"
              required
            />
            <label
              className="label-produto-modal"
              htmlFor="quantidade-p-produto"
            >
              Quantidade P
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="quantidade-p-produto"
              id="quantidade-p-produto"
              maxLength="50"
              required
            />
            <label
              className="label-produto-modal"
              htmlFor="quantidade-m-produto"
            >
              Quantidade M
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="quantidade-m-produto"
              id="quantidade-m-produto"
              maxLength="50"
              required
            />
            <label
              className="label-produto-modal"
              htmlFor="quantidade-g-produto"
            >
              Quantidade G
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="quantidade-g-produto"
              id="quantidade-g-produto"
              maxLength="50"
              required
            />
            <label className="label-produto-modal" htmlFor="desconto-produto">
              Desconto
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="desconto-produto"
              id="desconto-produto"
              maxLength="50"
              required
            />
            <label
              className="label-produto-modal"
              htmlFor="link-imagem-produto"
            >
              Link: Imagem
            </label>
            <input
              className="input-produto-modal"
              type="text"
              name="link-imagem-produto"
              id="link-imagem-produto"
              maxLength="50"
              required
            />
          </form>
          <button className="botao-atualizar-modal">Atualizar</button>
        </section>
      </section>
    </div>
  );
};

export default ModalAtualizarProduto;
