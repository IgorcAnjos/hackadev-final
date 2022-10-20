import { React, useState } from "react";
import { Link } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";

import "./AdmCatalogo.css";
import ModalAtualizarProduto from "../ModalAtualizarProduto";
import { useContext } from "react";
import { AtualizaProdutoContext } from "../../contexts/AtualizaProduto";
import { useEffect } from "react";

const AdmCatalogo = ({
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
  const {
    setIdProduto,
    setNomeProduto,
    setprecoProduto,
    setDescricaoProduto,
    setQuantidadePProduto,
    setQuantidadeMProduto,
    setQuantidadeGProduto,
    setImagemProduto,
    setDescontoProduto,
  } = useContext(AtualizaProdutoContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setIdProduto(id);
    setNomeProduto(nome);
    setprecoProduto(preco);
    setDescricaoProduto(descricao);
    setQuantidadePProduto(qtdP);
    setQuantidadeMProduto(qtdM);
    setQuantidadeGProduto(qtdG);
    setImagemProduto(imagem);
    setDescontoProduto(desconto);
  }, [modalIsOpen]);

  return (
    <main className="main-catalogo__adm">
      <section className="produto">
        <div className="imagem">
          <img src={imagem} alt="Imagem Terno" className="img-produto" />
        </div>
        <div className="descricao">
          <p className="texto-adm-produto">Id: {id}</p>
          <p className="texto-adm-produto">{nome}</p>
          <p className="texto-adm-produto">R$ {preco}</p>
          <p className="texto-adm-produto">Qtd. P: {qtdP}</p>
          <p className="texto-adm-produto">Qtd. M: {qtdM}</p>
          <p className="texto-adm-produto">Qtd. G:{qtdG}</p>
        </div>
      </section>
      <div className="alterar">
        <button
          onClick={() => {
            setModalIsOpen(!modalIsOpen);
          }}
          className="botao-alterar"
        >
          Editar
          {/* <FiEdit className="icone-alterar" /> */}
        </button>
      </div>
      <div
        className="background-blur"
        style={modalIsOpen ? { display: "flex" } : { display: "none" }}
      >
        <section className="popup">
          <div>
            <div className="header-fechar-produto-id">
              <div
                onClick={() => {
                  setModalIsOpen(!modalIsOpen);
                }}
              >
                <GrFormClose className="fechar-popup" />
              </div>
              <p className="produto-id">ID:{id}</p>
            </div>
          </div>
          <section className="produto-infos">
            <img
              className="imagem-produto-modal"
              src={imagem}
              alt="ImagemProduto"
            />
            <form className="form-modal">
              <label className="label-produto-modal" htmlFor="nome-produto">
                Nome
              </label>
              <input
                placeholder={nome}
                className="input-produto-modal"
                type="text"
                name="nome-produto"
                id="nome-produto"
                maxLength="50"
                onChange={(e) => setNomeProduto(e.target.value)}
                required
              />
              <label className="label-produto-modal" htmlFor="preco-produto">
                Preço
              </label>
              <input
                onChange={(e) => setprecoProduto(e.target.value)}
                placeholder={preco}
                className="input-produto-modal"
                type="number"
                name="preco-produto"
                id="preco-produto"
                maxLength="50"
                required
              />
              <label
                className="label-produto-modal"
                htmlFor="descrição-produto"
              >
                Descrição
              </label>
              <input
                onChange={(e) => setDescricaoProduto(e.target.value)}
                placeholder={descricao}
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
                onChange={(e) => setQuantidadePProduto(e.target.value)}
                placeholder={qtdP}
                className="input-produto-modal"
                type="number"
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
                onChange={(e) => setQuantidadeMProduto(e.target.value)}
                placeholder={qtdM}
                className="input-produto-modal"
                type="number"
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
                onChange={(e) => setQuantidadeGProduto(e.target.value)}
                placeholder={qtdG}
                className="input-produto-modal"
                type="number"
                name="quantidade-g-produto"
                id="quantidade-g-produto"
                maxLength="50"
                required
              />
              <label className="label-produto-modal" htmlFor="desconto-produto">
                Desconto
              </label>
              <input
                onChange={(e) => setDescricaoProduto(e.target.value)}
                placeholder={desconto}
                className="input-produto-modal"
                type="number"
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
                onChange={(e) => setImagemProduto(e.target.value)}
                placeholder={imagem}
                className="input-produto-modal"
                type="url"
                name="link-imagem-produto"
                id="link-imagem-produto"
                maxLength="50"
                required
              />
            </form>
            <button className="botao-atualizar-modal">
              <Link
                className="link-botao-atualizar"
                to="/usuario/adm/produtos/atualiza"
              >
                Atualizar
              </Link>
            </button>
          </section>
        </section>
      </div>
    </main>
  );
};

export default AdmCatalogo;
