require("dotenv").config();
const { default: axios } = require("axios");

const url = process.env.URL_DB;

beforeEach(async () => {
  await axios({
    url: `${url}`,
    method: "delete",
  });
});

test("Deve obter o status 200", async function () {
  const response = await axios({
    url: url,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Referentes a Produtos  -----------------------------------------------

// Pegar todos os produtos do banco
test.only("01 PRODUTOS _ Deve obter o status 200 - GET", async function () {
  const response = await axios({
    url: `${url}produtos/info/`,
    method: "get",
  });
  const status = response.status;
  const data = response.data;
  console.log(data);
  expect(status).toEqual(200);
});

// Pegar produtos por categoria
test("02 PRODUTOS _ Deve obter o status 200 - GET", async function () {
  const idCategoria = 2;
  const response = await axios({
    url: `${url}produtos/categoria/${idCategoria}`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Pegar produtos por Id
test("03 PRODUTOS _ Deve obter o status 200 - GET", async function () {
  const idProdutos = 2;
  const response = await axios({
    url: `${url}produtos/${idProdutos}`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Atualizar produtos do banco de dados
test("04 Produtos _ Deve obter status 204 - Update: PUT", async function () {
  const newDadosProduto = {
    imagem: "http://Pudim.com",
    nome: "pudimzim",
    descricao: "Este produto é baum",
    preco: 1400,
    quantidadeP: 1,
    quantidadeM: 2,
    quantidadeG: 3,
    desconto: 100,
  };

  const idProduto = 2;

  const response = await axios({
    url: `${url}produtos/atualizar/${idProduto}`,
    method: "put",
    data: newDadosProduto,
  });

  const status = response.status;
  const message = response.message;
  console.log(message);
  expect(status).toEqual(204);
});

// Inserir produtos no banco de dados
test("01 USUARIO & CADASTROS _ Deve obter status 201 - insert: POST", async function () {
  const newProduto = {
    imagem: "http://pave.com",
    nome: "Pra ver",
    descricao: "Não é pra comer",
    idCategoria: 3,
    preco: 1500,
    quantidadeP: 0,
    quantidadeM: 0,
    quantidadeG: 0,
    desconto: 2,
  };

  const response = await axios({
    url: `${url}produtos/cadastrar/`,
    method: "post",
    data: newProduto,
  });

  const status = response.status;
  expect(status).toEqual(201);
});

// subtrair quantidades de produtos com um tamanho selecionado
test("02 PRODUTOS _ Deve obter status 204 - UPDATE: PUT", async function () {
  const subtrair = {
    quantidade: 4,
    tamanho: "m",
  };
  const idProduto = 1;

  const response = await axios({
    url: `${url}produtos/subtrair/${idProduto}`,
    method: "put",
    data: subtrair,
  });

  const status = response.status;
  const message = response.status;
  console.log(message);
  expect(status).toEqual(204);
});

// Referentes a Cadastros e Dados Dadastrais  ---------------------------

// Cadastrar novos usuarios
test("03 USUARIO & CADASTROS _ Deve obter status 201 - insert: POST", async function () {
  const newUsuario = {
    email: "pedro@gmail.com",
    senha: "pedrinho123",
  };

  const response = await axios({
    url: `${url}usuarios/cadastro/novo`,
    method: "post",
    data: newUsuario,
  });

  const status = response.status;
  expect(status).toEqual(201);
});

// Erro Cadastrar novos usuarios
test("04 Deve obter status 422 - insert: POST", async function () {
  const newUsuario = {
    email: "pedro@gmail.com",
  };

  const response = await axios({
    url: `${url}usuarios/cadastro/novo`,
    method: "post",
    data: newUsuario,
    validateStatus: false,
  });
  const status = response.status;

  expect(status).toEqual(422);
});

// Inativar usuários cadastrados
test("05 USUARIO & CADASTROS _ Deve obter status 204 - Update: PUT", async function () {
  const idUsuario = 2;

  const response = await axios({
    url: `${url}usuarios/info/inativar/${idUsuario}/`,
    method: "put",
  });

  const status = response.status;
  expect(status).toEqual(204);
});

// Efetuar login verificar dados e gerar token de acesso
test.skip("06 USUARIO & CADASTROS _ Deve obter o status 200", async function () {
  const email = "eric@gmail.com";
  const senha = "eric@gmail.com";

  const response = await axios({
    url: `${url}login/${email}/${senha}`,
    method: "get",
  });
  const status = response.status;
  const data = response.data;
  console.log(data);
  expect(status).toEqual(200);
});

// Atualizar dados cadastrais
test("07 USUARIO & CADASTROS _ Deve obter status 204 - Update: PUT", async function () {
  const newDados = {
    nomeCompleto: "Joca da Silva",
    pais: "Brasil",
    cep: "74717171",
    logradouro: "R. joca Qd joca lote 1 ",
    cidade: "Goiania",
    estado: "GO",
    complemento: "joca",
  };

  const idUsuario = 3;

  const response = await axios({
    url: `${url}usuarios/info/update/${idUsuario}`,
    method: "put",
    data: newDados,
  });

  const status = response.status;
  expect(status).toEqual(204);
});

// Atualizar email e senha cadastradas
test("08 USUARIO & CADASTROS _ Deve obter status 204 - Update: PUT", async function () {
  const newdados = {
    email: "joaozinho@gamil.com",
    senha: "joaozinho",
  };
  const idUsuario = 2;

  const response = await axios({
    url: `${url}usuarios/update/${idUsuario}/`,
    method: "put",
    data: newdados,
  });

  const status = response.status;
  expect(status).toEqual(204);
});

// Atualizar Usuario para ADM
test("09 USUARIO & CADASTROS _ Deve obter status 204 - Update: PUT", async function () {
  const idUsuario = 2;

  const response = await axios({
    url: `${url}usuarios/adm/update/${idUsuario}/`,
    method: "put",
  });

  const status = response.status;
  expect(status).toEqual(204);
});

// Referentes a pedidos --------------------------------

// Pegar todos os pedidos existentes
test("01 PEDIDOS _ Deve obter o status 200 - GET", async function () {
  const response = await axios({
    url: `${url}pedidos/info`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Pegar todos os pedidos de um usuário
test("02 PEDIDOS _ Deve obter o status 200 - GET", async function () {
  const userId = 2;
  const response = await axios({
    url: `${url}pedidos/info/usuarios/${userId}`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Pegar dados de um pedido
test("03 PEDIDOS _ Deve obter o status 200 - GET", async function () {
  const idPedido = 2;
  const response = await axios({
    url: `${url}pedidos/info/${idPedido}`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Pegar produtos de um pedido
test("04 PEDIDOS _ Deve obter o status 200 - GET", async function () {
  const idPedido = 2;
  const response = await axios({
    url: `${url}pedidos/info/produtos/${idPedido}`,
    method: "get",
  });
  const status = response.status;
  expect(status).toEqual(200);
});

// Inserir novo pedido
test("05 PEDIDO _ Deve obter status 201 - insert: POST", async function () {
  const newPedido = {
    idUsuario: 3,
    precoTotal: "1200",
    idFormaPagamento: 2,
  };

  const response = await axios({
    url: `${url}pedidos/novo`,
    method: "post",
    data: newPedido,
  });

  const status = response.status;
  expect(status).toEqual(201);
});

// Erro de Insert Pedido
test("06 PEDIDO _ Deve obter status 422 - insert: POST", async function () {
  const newPedido = {
    idUsuario: 3,
    precoTotal: "1200",
  };

  const response = await axios({
    url: `${url}pedidos/novo`,
    method: "post",
    data: newPedido,
    validateStatus: false,
  });
  const status = response.status;

  expect(status).toEqual(422);
});

// Inserir produtos de um determinado pedido

test("07 PEDIDO _ Deve obter status 201 - insert: POST", async function () {
  const newProdutos = [
    {
      idProduto: 1,
      precoSubtotal: 200,
      quantidade: 2,
      tamanho: "m",
    },
    {
      idProduto: 1,
      precoSubtotal: 200,
      quantidade: 2,
      tamanho: "p",
    },
    {
      idProduto: 1,
      precoSubtotal: 200,
      quantidade: 2,
      tamanho: "g",
    },
  ];

  const idPedido = 4;
  const response = await axios({
    url: `${url}pedidos/produtos/novo/${idPedido}`,
    method: "post",
    data: newProdutos,
  });

  const status = response.status;
  expect(status).toEqual(201);
});

// Error ao Inserir produtos de um determinado pedido

test("08 PEDIDO _ Deve obter status 422 - insert: POST", async function () {
  const newProdutos = [];
  const idPedido = 4;
  const response = await axios({
    url: `${url}pedidos/produtos/novo/${idPedido}`,
    method: "post",
    data: newProdutos,
    validateStatus: false,
  });

  const status = response.status;
  expect(status).toEqual(422);
});

// Atualizar informações de um pedido
test("09 Deve obter status 204 - Update: PUT", async function () {
  const uptadePedido = {
    status: 2,
    idFormaPagamento: 1,
  };
  const idPedidoUpdate = 4;

  const response = await axios({
    url: `${url}pedidos/info/${idPedidoUpdate}/`,
    method: "put",
    data: uptadePedido,
  });

  const status = response.status;
  expect(status).toBe(204);
});
