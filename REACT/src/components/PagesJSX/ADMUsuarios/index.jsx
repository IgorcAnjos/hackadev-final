import React from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import "./AdmEditUsers.css";

const AdmEditUsers = () => {
  return (
    <main className="main-edit__users">
      <section className="edit-users">
        <Header texto="Adm Usuários" />
        <section className="tabela-usuarios">
          <table className="tabela-detalhes">
            <thead>
              <td className="titulo-tabela">Email</td>
              <td className="titulo-tabela">Data</td>
              <td className="titulo-tabela">Pedidos</td>
              <td className="titulo-tabela">Adm</td>
            </thead>
            <tbody>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tbody>
          </table>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default AdmEditUsers;
