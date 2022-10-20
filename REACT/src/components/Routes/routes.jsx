import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";
import Duvidas from "../PagesJSX/DuvidasESac/Duvidas";
import InfoUsuariosProvider from "../../contexts/Clientes/ClientesProvider";
import Usuario from "../PagesJSX/Usuario";
import Pedidos from "../PagesJSX/Pedidos";
import ProdutoPorPedido from "../PagesJSX/PedidosProdutos";
import GeraPedido from "../PagesJSX/GeraPedido";
import GeraPedidoProvider from "../../contexts/GeraPedido/GeraPedidoProvider";
import AdmProdutos from "../PagesJSX/ADMProduto";
import CadastroContextProvider from "../../contexts/CadastroContext/CadastroContextProvider";
import GeraCadastro from "../PagesJSX/GeraCadastro";
import AdmEditUsers from "../PagesJSX/ADMUsuarios";
import AtualizaPedido from "../PagesJSX/AtualizaPedido";
import AtualizaPedidoProvider from "../../contexts/AtualizaPedido/AtualizaPedidoProvider";
import { AtualizaProdutoContext } from "../../contexts/AtualizaProduto";
import AtualizaProdutoContextProvider from "../../contexts/AtualizaProduto/AtualizaProdutoContextProvider";
import AtualizaProdutoBanco from "../PagesJSX/AtualizaProdutodoBanco";

const RouterPages = () => {
  const isAutenticado = () => {
    if (localStorage.login === undefined) {
      return false;
    } else {
      const autenticado =
        JSON.parse(localStorage.login).id &&
        JSON.parse(localStorage.login).token
          ? true
          : false;
      return autenticado;
    }
  };

  const AuthRoute = ({ children }) => {
    return isAutenticado() ? <>{children}</> : <Navigate to="/login" replace />;
  };

  const NotAuthRoute = ({ children }) => {
    return !isAutenticado() ? <>{children}</> : <Navigate to="/" replace />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAutenticado={isAutenticado} />} />
        <Route
          path="/login"
          element={
            <NotAuthRoute>
              <Login />
            </NotAuthRoute>
          }
        />
        <Route
          path="/cadastro"
          element={
            <NotAuthRoute>
              <CadastroContextProvider>
                <Cadastro />
              </CadastroContextProvider>
            </NotAuthRoute>
          }
        />
        <Route
          path="/cadastro/geracadastro"
          element={
            <NotAuthRoute>
              <CadastroContextProvider>
                <GeraCadastro />
              </CadastroContextProvider>
            </NotAuthRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            // <InfoUsuariosProvider>
            <AuthRoute>
              <Checkout />
            </AuthRoute>
            // </InfoUsuariosProvider>
          }
        />
        <Route path="/busca" element={<Busca />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route
          path="/produto/:id"
          element={<Produto isAutenticado={isAutenticado} />}
        />
        <Route
          path="/usuario"
          element={
            <AuthRoute>
              <Usuario />
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/pedidos"
          element={
            <AuthRoute>
              <InfoUsuariosProvider>
                <AtualizaPedidoProvider>
                  <Pedidos />
                </AtualizaPedidoProvider>
              </InfoUsuariosProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/pedidos/atualizar/:idPedido/:idStatus/:idFormaDePagamento"
          element={
            <AuthRoute>
              <AtualizaPedidoProvider>
                <AtualizaPedido />
              </AtualizaPedidoProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/pedidos/Detalhes/:id"
          element={
            <AuthRoute>
              <InfoUsuariosProvider>
                <ProdutoPorPedido />
              </InfoUsuariosProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/checkout/gerapedido/:id"
          element={
            <AuthRoute>
              <GeraPedidoProvider>
                <GeraPedido />
              </GeraPedidoProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/adm/produtos"
          element={
            <AuthRoute>
              <AtualizaProdutoContextProvider>
                <AdmProdutos />
              </AtualizaProdutoContextProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/adm/produtos/atualiza"
          element={
            <AuthRoute>
              <AtualizaProdutoContextProvider>
                <AtualizaProdutoBanco />
              </AtualizaProdutoContextProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/adm/usuariosEdit"
          element={
            <AuthRoute>
              <AdmEditUsers />
            </AuthRoute>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
