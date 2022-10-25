import * as data from "../data/index.mjs";
import * as twilio from "../twilio/index.mjs";
import pkg from "crypto-js";
import { handleLauchEmail } from "../nodeMailer/index.mjs";
const { MD5 } = pkg;

export const getUsuarios = async () => {
  const usuarios = await data.getUsuarios();
  return usuarios;
};

// Pegar Dados de todos os usuarios cadastrados
export const getDadosUsuarios = async () => {
  const usuarios = await data.getDadosUsuarios();
  return usuarios;
};
// Zerar banco de dados -------------------------------------------------
export const zeraDb = async () => {
  try {
    data.zeraDb();
  } catch {
    throw new Error("Não foi possivel excluir");
  }
};

// Referentes a Produtos  -----------------------------------------------

// Pegar todos os produtos do banco
export const getProdutos = async () => {
  try {
    const produtos = await data.getProdutos();
    return produtos;
  } catch {
    throw new Error("Erro interno");
  }
};

// Pegar produtos por categoria
export const getProdutosByIdCategoria = async (idCategoria) => {
  if (idCategoria === undefined) {
    throw new Error("id invalido");
  } else {
    const produtos = await data.getProdutosByIdCategoria(idCategoria);
    if (produtos.length === 0) {
      throw new Error("Nenhum produto encontrado");
    }
    return produtos;
  }
};

// Pegar produtos por Id
export const getProdutosById = async (idProduto) => {
  if (idProduto === undefined) {
    throw new Error("id invalido");
  } else {
    const produtos = await data.getProdutosById(idProduto);
    if (produtos.length === 0) {
      throw new Error("Nenhum produto encontrado");
    }
    return produtos;
  }
};

// Atualizar produtos do banco de dados
export const atualizarDadosDeProdutos = (newDadosProduto, idProduto) => {
  if (
    idProduto === undefined ||
    newDadosProduto.imagem === undefined ||
    newDadosProduto.nome === undefined ||
    newDadosProduto.descricao === undefined ||
    newDadosProduto.preco === undefined ||
    newDadosProduto.quantidadeP === undefined ||
    newDadosProduto.quantidadeM === undefined ||
    newDadosProduto.quantidadeG === undefined ||
    newDadosProduto.desconto === undefined
  ) {
    throw new Error("Há dados invalidos.");
  } else {
    data.atualizarDadosDeProdutos(newDadosProduto, idProduto);
  }
};

// Inserir produtos no banco de dados
export const insertProduto = (newProduto) => {
  if (
    newProduto.imagem === undefined ||
    newProduto.nome === undefined ||
    newProduto.descricao === undefined ||
    newProduto.idCategoria === undefined ||
    newProduto.preco === undefined ||
    newProduto.quantidadeP === undefined ||
    newProduto.quantidadeM === undefined ||
    newProduto.quantidadeG === undefined ||
    newProduto.desconto === undefined
  ) {
    throw new Error("Todos os campos são obrigatórios");
  } else {
    data.insertProduto(newProduto);
  }
};

// subtrair quantidades de produtos com um tamanho selecionado
export const subtrairProduto = async (subtrair, idProduto) => {
  const { quantidade, tamanho } = subtrair;
  if (
    idProduto === undefined ||
    quantidade === undefined ||
    tamanho === undefined
  ) {
    throw new Error("Há dados invalidos.");
  } else {
    const produtoInfo = await data.getProdutosById(idProduto);
    if (produtoInfo.length === 0) {
      throw new Error("aProduto não encontrdo");
    } else if (produtoInfo.length > 0) {
      const quantidadeTamanhoTexto = `quantidade_${tamanho}`;
      if (Number(produtoInfo[0][quantidadeTamanhoTexto]) - quantidade < 0) {
        throw new Error("Quantidade de produtos indisponível");
      } else {
        const sobra =
          Number(produtoInfo[0][quantidadeTamanhoTexto]) - Number(quantidade);
        try {
          data.subtrairProduto(quantidadeTamanhoTexto, sobra, idProduto);
        } catch {
          throw new Error("Não foi possivel adicionar o produto");
        }
      }
    }
  }
};

// Referentes a Cadastros e Dados Dadastrais  ---------------------------

// Pegar dados de usuários cadastrados por id
export const getDadosUsuariosIyId = async (idUsuario) => {
  const usuarios = await data.getDadosUsuariosIyId(idUsuario);
  return usuarios;
};

// Cadastrar novos usuarios
export const insertCadastro = (newUsuario) => {
  const {
    email,
    senha,
    nomeCompleto,
    pais,
    cep,
    logradouro,
    cidade,
    estado,
    complemento,
  } = newUsuario;
  if (
    email === undefined ||
    senha === undefined ||
    nomeCompleto === undefined ||
    pais === undefined ||
    cep === undefined ||
    logradouro === undefined ||
    cidade === undefined ||
    estado === undefined ||
    complemento === undefined
  ) {
    throw new Error("Todos os campos são obrigatórios");
  } else {
    data.insertCadastro(newUsuario);
  }
};

// Inativar usuarios cadastrados
export const inativarUsuarioById = (idUsuario) => {
  Number(idUsuario);
  if (idUsuario === undefined) {
    throw new Error("Id invalido");
  } else {
    data.inativarUsuarioById(idUsuario);
  }
};

// Efetuar login verificar dados e gerar token de acesso
export const makeLogin = async (dados) => {
  const { email, senha } = dados;

  if (
    email !== undefined ||
    email !== null ||
    senha !== undefined ||
    senha !== null
  ) {
    function verificarDados() {
      const senhaMD5 = MD5(String(senha));
      if (dadosDoBanco.senha == senhaMD5) {
        return true;
      } else {
        return false;
      }
    }

    function gerartoken() {
      let middle = String(dadosDoBanco.senha);
      const token = `${middle.substr(0, 5).toUpperCase()}${middle
        .substr(27, 5)
        .toUpperCase()}`;
      const id = dadosDoBanco.id;
      const email = dadosDoBanco.email;
      const admin = dadosDoBanco.admin;
      const dados = {
        id,
        email,
        token,
        admin,
      };
      return dados;
    }

    const dadosDoBanco = await data.makeLogin(email);
    if (!dadosDoBanco) {
      throw new Error("usuario não encontrado");
    } else {
      const verificado = verificarDados();

      if (verificado) {
        const IdEmailSenhaTokenAdmin = gerartoken();
        return IdEmailSenhaTokenAdmin;
      } else {
        throw new Error("usuario ou senha invalidos");
      }
    }
  } else {
    throw new Error("dados invalidos");
  }
};

// Atualizar dados cadastrais
export const updateCadastro = (idUsuario, newDados) => {
  if (
    (idUsuario === undefined,
    newDados.nomeCompleto === undefined ||
      newDados.pais === undefined ||
      newDados.cep === undefined ||
      newDados.logradouro === undefined ||
      newDados.cidade === undefined ||
      newDados.estado === undefined ||
      newDados.complemento === undefined)
  ) {
    throw new Error("Há dados invalidos.");
  } else {
    data.updateCadastro(idUsuario, newDados);
  }
};

// Atualizar email e senha cadastradas
export const changeEmailPassword = (newDados, idUsuario) => {
  if (
    newDados.email === undefined ||
    newDados.senha === undefined ||
    idUsuario === undefined
  ) {
    throw new Error("Conteúdo invalido");
  } else {
    data.changeEmailPassword(newDados, idUsuario);
  }
};

// Atualizar Usuario para ADM
export const changeAdmUsuario = (idUsuario) => {
  if (idUsuario === undefined) {
    throw new Error("Invalid idUsuario");
  } else {
    data.changeAdmUsuario(idUsuario);
  }
};

// Referentes a pedidos --------------------------------

// Pegar todos os pedidos existentes
export const getPedidos = async () => {
  const pedidos = await data.getPedidos();
  return pedidos;
};

// Pegar todos os pedidos de um usuário

export const getPedidosByIdUsuario = async (idUsuario) => {
  const pedidos = await data.getPedidosByIdUsuario(idUsuario);
  return pedidos;
};

// Pegar dados informações de um pedido

export const getInfoPedidoById = async (idPedido) => {
  const pedido = await data.getInfoPedidoById(idPedido);
  return pedido;
};

// Pegar produtos de um pedido

export const getProdutosByPedidoId = async (idPedido) => {
  const produtos = await data.getProdutosByPedidoId(idPedido);
  return produtos;
};

// Inserir um novo pedido
export const insertPedido = async (newPedido) => {
  if (
    newPedido.idUsuario === undefined ||
    newPedido.precoTotal === undefined ||
    newPedido.idFormaPagamento === undefined
  ) {
    throw new Error(
      "Está faltando um desses: idUsuario, precoTotal, idFormaPagamento"
    );
  } else {
    const id = await data.insertPedido(newPedido);
    return id;
  }
};

// Inserir produtos de um determinado pedido

export const insertProdutosByPedidoId = (idPedido, produtos) => {
  if (produtos.length === 0) {
    throw new Error("É necessário a inserção de produtos");
  } else {
    data.insertProdutosByPedidoId(idPedido, produtos);
    twilio.mensagemFinalizarCompra(produtos, idPedido);
  }
};

// Alterar informações de um pedido

export const updatePedido = (idPedidoUpdate, updatePedido) => {
  if (
    idPedidoUpdate === undefined ||
    updatePedido.status === undefined ||
    updatePedido.idFormaPagamento === undefined
  ) {
    throw new Error(
      "Está faltando um desses:status, idFormaPagamento, idPedidoUpdate"
    );
  } else {
    data.updatePedido(idPedidoUpdate, updatePedido);
  }
};

// Referente ao envio de mensagens nos meios de comunicação ----------------
export const enviarMensagens = (body) => {
  if (
    body.email === undefined ||
    body.precoTotal === undefined ||
    body.email === null ||
    body.precoTotal === null
  ) {
    throw new Error("Dados invalidos");
  } else {
    const mensagem = `
    Parabens, sua compra foi efetuada com sucesso
    Dados-------------------------------- 
    email: ${body.email}
    Forma de Pagamento: ${body.formaDePagamento}
    `;
    handleLauchEmail(
      body.email,
      mensagem,
      "<KingsMan/> Compra finalizada com sucesso"
    );
    twilio.sendMessageWhatsappTwilio(mensagem);
  }
};

// Pegar todas as compras de todos os pedidos efeturados
export const getCompras = async () => {
  const compras = await data.getCompras();
  return compras;
};
