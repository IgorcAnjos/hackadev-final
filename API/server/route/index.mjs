import express from "express";
const router = express.Router();

import * as service from "../service/index.mjs";

router.get("/", async (req, res) => {
  res.send("Oi, estou escutando aqui!");
});

router.get("/usuarios", async (req, res) => {
  const usuariosJSON = await service.getUsuarios();
  res.json(usuariosJSON);
});

// Pegar dados de todos os usuários cadastrados
router.get("/usuarios/dados", async (req, res) => {
  const usuariosJSON = await service.getDadosUsuarios();
  res.json(usuariosJSON);
});

// Zerar banco de dados -------------------------------------------------
// zerar Banco de Dados endpoint: /
// method: "delete"
router.delete("/", async (req, res) => {
  try {
    service.zeraDb();
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Referentes a Produtos  -----------------------------------------------

// Pegar todos os produtos do banco
// endpoint: /produtos/info
// method: "get"
router.get("/produtos/info", async (req, res) => {
  try {
    const produtos = await service.getProdutos();
    res.status(200).json(produtos);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Pegar produtos por categoria
// endpoint: /produtos/categoria/:id_categoria
// methoc: "get"
router.get("/produtos/categoria/:id", async (req, res) => {
  const idCategoria = req.params.id;
  try {
    const produtos = await service.getProdutosByIdCategoria(idCategoria);
    res.status(200).json(produtos);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Pegar produtos por Id
// endpoint: /produtos/:id
// method: "get"
router.get("/produtos/:id", async (req, res) => {
  const idProduto = req.params.id;
  try {
    const produtos = await service.getProdutosById(idProduto);
    res.status(200).json(produtos);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Atualizar produtos do banco de dados
// endpoint: /produtos/atualizar/:id
// method: "put"
// body: {
//   imagem: "http://Pudim.com",
//   nome: "pudimzim",
//   descricao: "Este produto é baum",
//   preco: 1400,
//   quantidadeP: 1,
//   quantidadeM: 2,
//   quantidadeG: 3,
//   desconto: 100,
// }
router.put("/produtos/atualizar/:id", async (req, res) => {
  const newDadosProduto = req.body;
  const idProduto = req.params.id;
  try {
    service.atualizarDadosDeProdutos(newDadosProduto, idProduto);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Inserir produto no banco de dados
// endpoint: /produtos/cadastrar/
// method: "post"
// body: {
//   imagem: "http://pave.com",
//   nome: "Pra ver",
//   descricao: "Não é pra comer",
//   idCategoria: 3,
//   preco: 1500,
//   quantidadeP: 0,
//   quantidadeM: 0,
//   quantidadeG: 0,
//   desconto: 2,
// }
router.post("/produtos/cadastrar/", async (req, res) => {
  const newProduto = req.body;
  try {
    service.insertProduto(newProduto);
    res.status(201).send("Cadastro Efetuado com sucesso!");
  } catch (e) {
    res.status(422).send(e.message);
  }
});

// subtrair quantidades de produtos com um tamanho selecionado
// endpoint: /produtos/subtrair/:id
// method: "put"
// body: {quantidade: 4, tamanho: "m"}
router.put("/produtos/subtrair/:id", async (req, res) => {
  const subtrair = req.body;
  const idProduto = req.params.id;
  try {
    await service.subtrairProduto(subtrair, idProduto);
    res.status(204).end();
  } catch (e) {
    res.status(422).send(e.message);
  }
});

// Referentes a Cadastros e Dados Dadastrais  ---------------------------

// Pegar dados de usuários cadastrados por id
// endpoint: /usuarios/dados/:id_usuario
// method: get
router.get("/usuarios/dados/:id", async (req, res) => {
  const idUsuario = req.params.id;
  try {
    const usuariosJSON = await service.getDadosUsuariosIyId(idUsuario);
    res.json(usuariosJSON);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// Cadastrar novos usuarios
// endpoint: /usuarios/cadastro/novo
// method: "post"
// body: {email: "pedro@gmail.com",
// senha: "pedrinho123",
// nomeCompleto: "Pedro da Silva",
// pais: "Brasil",
// cep: "74757171",
// logradouro: "Casa do Pedro",
// cidade: "Goiânia",
// estado: "GO",
// complemento: "Pedro",
// }
router.post("/usuarios/cadastro/novo", async (req, res) => {
  const newUsuario = req.body;
  try {
    service.insertCadastro(newUsuario);
    res.status(201).send("Cadastro Efetuado com sucesso!");
  } catch (e) {
    res.status(422).send(e.message);
  }
});

// Inativar usuarios cadastrados
// endpoint: /usuarios/info/inativar/:id_usuario
// method: "put"
router.put("/usuarios/info/inativar/:id", async (req, res) => {
  try {
    const idUsuario = req.params.id;
    service.inativarUsuarioById(idUsuario);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Efetuar login, verificar dados e gerar token de acesso
// endpoint: /login/:email/:senha
// method: "get"
router.get("/login/:email/:senha", async (req, res) => {
  const email = req.params.email;
  const senha = req.params.senha;
  const dados = { email, senha };

  try {
    const response = await service.makeLogin(dados);
    res.status(200).json(response);
  } catch (e) {
    res.status(406).send(e.message);
  }
});

// Atualizar dados cadastrais
// enpoint: /usuarios/info/update/:id
// method: "put"
// body: {
//   nomeCompleto: "Joca da Silva",
//   pais: "Brasil",
//   cep: "74717171",
//   logradouro: "R. joca Qd joca lote 1 ",
//   cidade: "Goiania",
//   estado: "GO",
//   complemento: "joca",
// }
router.put("/usuarios/info/update/:id", async (req, res) => {
  const idUsuario = req.params.id;
  const newDados = req.body;
  try {
    service.updateCadastro(idUsuario, newDados);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Atualizar email e senha cadastradas
// endpoint: /usuarios/update/:id
// method: "put"
// body: {email: "joaozinho@gamil.com", senha: "joaozinho"}
router.put("/usuarios/update/:id", async (req, res) => {
  const newDados = req.body;
  const idUsuario = req.params.id;
  try {
    service.changeEmailPassword(newDados, idUsuario);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Atualizar Usuario para ADM
// endpoint: /usuarios/adm/update/:id
// method: "put"
router.put("/usuarios/adm/update/:id", async (req, res) => {
  const idUsuario = req.params.id;
  try {
    service.changeAdmUsuario(idUsuario);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Referentes a pedidos ---------------------------------

// Pegar dados de todos os pedidos existentes
// endpoint: /pedidos/info
// method: "get"
router.get("/pedidos/info", async (req, res) => {
  try {
    const pedidosJSON = await service.getPedidos();
    res.status(200).json(pedidosJSON);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Pegar todos os pedidos de um usuário
// endpoint: /pedidos/info/usuarios/:id_usuario
// method: "get"
router.get("/pedidos/info/usuarios/:id", async (req, res) => {
  try {
    const idUsuario = req.params.id;
    const pedidosJSON = await service.getPedidosByIdUsuario(idUsuario);
    res.status(200).json(pedidosJSON);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Pegar dados informações de um pedido
// endpoint: /pedidos/info/:id_pedido
// method: "get"
router.get("/pedidos/info/:id", async (req, res) => {
  try {
    const idPedido = req.params.id;
    const pedidoJSON = await service.getInfoPedidoById(idPedido);
    res.status(200).json(pedidoJSON);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Pegar produtos de um pedido
// endpoint: /pedidos/info/produtos/:id_pedido
// method: "get"
router.get("/pedidos/info/produtos/:id", async (req, res) => {
  try {
    const idPedido = req.params.id;
    const produtosJSON = await service.getProdutosByPedidoId(idPedido);
    res.status(200).json(produtosJSON);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// Inserir novo pedido
// endpoint: /pedidos/novo
// method: "post"
// body: {idUsuario: 3, precoTotal: "1200", idFormaPagamento: 2}
router.post("/pedidos/novo", async (req, res) => {
  const newPedido = req.body;
  try {
    const id = await service.insertPedido(newPedido);
    res.status(201).json(id);
  } catch (e) {
    res.status(422).send(e.message);
  }
});

// Inserir produtos de um determinado pedido
// endpoint: /pedidos/produtos/novo/:id_pedido
// method: "post"
// body: [
//   {
//     idProduto: 1,
//     precoSubtotal: 200,
//     quantidade: 2,
//     tamanho: "m",
//   },
//   {
//     idProduto: 1,
//     precoSubtotal: 200,
//     quantidade: 2,
//     tamanho: "p",
//   },
//   ...
// ]
router.post("/pedidos/produtos/novo/:id", async (req, res) => {
  const idPedido = req.params.id;
  const produtos = req.body;
  try {
    service.insertProdutosByPedidoId(idPedido, produtos);
    res.status(201).send("Produtos Inseridos com sucesso");
  } catch (e) {
    res.status(422).send(e.message);
  }
});

// Alterar informações de um pedido
// endpoint: /pedidos/info/:id_pedido
// method: "put"
// body: {status: 2, idFormaPagamento: 1 }
router.put("/pedidos/info/:id", async function (req, res) {
  const updatePedido = req.body;
  const idPedidoUpdate = req.params.id;
  try {
    service.updatePedido(idPedidoUpdate, updatePedido);
    res.status(204).end();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Referente ao envio de mensagens aos canais de comunicação com os
// endpoint: /contatocliente/whatsapp/email
// method: "post"
// body: {email: "test@example.com", formaDePagamento: "Cartão de Credito"}
router.post("/contatocliente/whatsapp/email", async (req, res) => {
  const body = req.body;
  try {
    service.enviarMensagens(body);
    res.status(201).send("sucesso");
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default router;
