import { bancoDeDados } from "../infra/index.mjs";

export const getUsuarios = () => {
  return bancoDeDados.query("SELECT id, ativo, email FROM usuarios");
};

export const getDadosUsuarios = () => {
  return bancoDeDados.query("SELECT * FROM dados_usuarios");
};

// Zerar banco de dados -------------------------------------------------

export const zeraDb = () => {
  bancoDeDados.none(
    `
    -------------------Apagar tabelas-----------------------
    DROP TABLE IF EXISTS compras;
    DROP TABLE IF EXISTS produtos;
    DROP TABLE IF EXISTS categorias;
    DROP TABLE IF EXISTS dados_usuarios;
    DROP TABLE IF EXISTS pedidos;
    DROP TABLE IF EXISTS status_pedidos;
    DROP TABLE IF EXISTS forma_pagamento;
    DROP TABLE IF EXISTS usuarios;

-------------------Criar tabelas------------------------
CREATE TABLE categorias (
    id   SERIAL PRIMARY KEY,
    nome VARCHAR(20)
);

CREATE TABLE produtos (
    id            SERIAL        PRIMARY KEY,
    imagem        VARCHAR(1000) NOT NULL,
    nome          VARCHAR(100)  NOT NULL,
    descricao     VARCHAR(500)  NOT NULL,
    id_categoria  INT REFERENCES categorias(id) NOT NULL,
    preco         DECIMAL(12,2) NOT NULL,
    quantidade_p  INT           NOT NULL, 
    quantidade_m  INT           NOT NULL,
    quantidade_g  INT           NOT NULL,
    desconto      INT           NOT NULL
);

CREATE TABLE usuarios (
    id    SERIAL      PRIMARY KEY ,
    ativo BOOLEAN     NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(32) NOT NULL,
    data  DATE        NOT NULL,
    admin BOOLEAN 
);

CREATE TABLE dados_usuarios (
    id_usuario    INT REFERENCES usuarios(id),
    nome_completo VARCHAR(50)  NOT NULL,
    pais          VARCHAR(10)  NOT NULL,
    cep           VARCHAR(8)   NOT NULL,
    logradouro    VARCHAR(100) NOT NULL,
    cidade        VARCHAR(30)  NOT NULL,
    estado        VARCHAR(2)   NOT NULL,
    complemento   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE forma_pagamento (
    id             SERIAL     PRIMARY KEY,
    nome           VARCHAR(20)
);

CREATE TABLE status_pedidos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(15)
);

CREATE TABLE pedidos (
    id                  SERIAL      PRIMARY KEY,
    id_usuario          INT REFERENCES usuarios(id) NOT NULL,
    preco_total         MONEY       NOT NULL,
    id_forma_pagamento  INT REFERENCES forma_pagamento(id) NOT NULL,
    status              INT REFERENCES status_pedidos(id) NOT NULL,
    data                DATE        NOT NULL,
    hora                TIME        NOT NULL
);

CREATE TABLE compras (
    id             SERIAL     PRIMARY KEY,
    id_pedido      INT REFERENCES pedidos(id),
    id_produto     INT REFERENCES produtos(id),
    preco_subtotal MONEY      NOT NULL,
    quantidade     INT        NOT NULL,
    tamanho        VARCHAR(1) NOT NULL
    
);

-------------------Inserir dados------------------------

-------------------- Categorias ------------------------

INSERT INTO categorias (nome)
VALUES
    ('Smoking'),
    ('Modern Fit'),
    ('Terno Conjunto'),
    ('Blazer');
--------------------- Produtos -------------------------


INSERT INTO produtos (imagem, nome, descricao, id_categoria, preco, quantidade_p, quantidade_m, quantidade_g, desconto)
VALUES
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728067188994098/unknown.png?width=491&height=634', 'Smoking Prata',                      'produto 1',  1,  500, 2, 5, 0,   0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728216627843134/unknown.png?width=491&height=634', 'Smoking Vinho Prateado',             'produto 2',  1,  750, 0, 5, 10, 15),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008728475261227088/unknown.png?width=491&height=634', 'Smoking Azul Escuro',                'produto 3',  1,  500, 2, 0, 10, 10),
	('https://media.discordapp.net/attachments/1008727983223230494/1008728641582137435/unknown.png?width=497&height=642', 'Smoking Vermelho Sangue',            'produto 4',  1,  680, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008729063357173830/unknown.png?width=417&height=642', 'Smoking Preto',                      'produto 5',  1,  740, 2, 0, 10,  5),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730638674841620/unknown.png?width=493&height=633', 'Terno Modern Fit Azul',              'produto 6',  2, 1500, 0, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730793285275799/unknown.png?width=406&height=634', 'Terno Modern Fit Branco',            'produto 7',  2, 1500, 2, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008730954036162600/unknown.png?width=482&height=634', 'Terno Modern Fit Cinza Escuro',      'produto 8',  2, 2000, 0, 5, 10, 25),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731089252126720/unknown.png?width=489&height=642', 'Terno Modern Fit Cinza Navy',        'produto 9',  2, 2200, 2, 5, 10, 25),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731323717918740/unknown.png?width=500&height=642', 'Terno Modern Fit Cinza Claro',       'produto 10', 2, 1200, 2, 5,  0,  5),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731490915463208/unknown.png?width=489&height=642', 'Terno Modern Fit Areia',             'produto 11', 2, 2400, 2, 0, 10, 35),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731582162554923/unknown.png?width=489&height=642', 'Terno Modern Fit Marrom',            'produto 12', 2, 2700, 2, 5, 10, 15),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731741508337665/unknown.png?width=412&height=642', 'Terno Modern Fit oliva',             'produto 13', 2, 2550, 2, 5, 10,  5),
	('https://media.discordapp.net/attachments/1008727983223230494/1008731862509830194/unknown.png?width=412&height=642', 'Terno Modern Fit Vermelho Sangue',   'produto 14', 2, 2200, 2, 5, 10, 25),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008734697427324948/unknown.png?width=519&height=634', 'Terno Conjunto Rosa',                'produto 15', 3, 3500, 2, 5, 10,  8),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008735052999430174/unknown.png?width=362&height=634', 'Terno Conjunto Azul Claro',          'produto 16', 3, 4000, 0, 5, 10,  0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008735264186847232/unknown.png?width=362&height=634', 'Terno Conjunto Cinza Xadrez',        'produto 17', 3, 4000, 2, 5, 10, 10),
	('https://media.discordapp.net/attachments/1008727983223230494/1008735690156150784/unknown.png?width=415&height=642', 'Terno Conjunto Beje Xadrez',         'produto 18', 3, 2000, 2, 5, 0,  15),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736245255524362/unknown.png?width=390&height=642', 'Terno Conjunto Cinza Escuro Xadrez', 'produto 19', 3, 3000, 2, 0, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736571618512987/unknown.png?width=428&height=642', 'Terno Conjunto Burg Xadrez',         'produto 20', 3, 4000, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008736679856705645/unknown.png?width=428&height=642', 'Terno Conjunto Navy Xadrez',         'produto 21', 3, 5000, 0, 5, 10, 25),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008740609793740871/unknown.png?width=498&height=634', 'Blazer Algodão Azul Claro',          'produto 22', 4, 1800, 0, 5, 10, 60),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008740789976830055/unknown.png?width=422&height=634', 'Blazer Slim Fit Preto Cetim',        'produto 23', 4, 2000, 2, 5, 0,   0),
    ('https://media.discordapp.net/attachments/1008727983223230494/1008741114108444834/unknown.png?width=569&height=634', 'Blazer Slim Vinho Cetim',            'produto 24', 4, 2500, 0, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741669585305631/unknown.png?width=428&height=642', 'Blazer Slim Fit cinza',              'produto 25', 4, 1500, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741797452841000/unknown.png?width=515&height=642', 'Blazer Veludo Bege',                 'produto 26', 4, 2550, 2, 0, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008741951685804093/unknown.png?width=428&height=642', 'Blazer Veludo Preto',                'produto 27', 4, 2580, 0, 5, 0,   0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742222889484378/unknown.png?width=435&height=642', 'Blazer Slim Fit grafite',            'produto 28', 4, 2140, 0, 2, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742427600883772/unknown.png?width=428&height=642', 'Blazer Slim Fit Azul Marinho',       'produto 29', 4,  500, 2, 5, 10,  0),
	('https://media.discordapp.net/attachments/1008727983223230494/1008742675383595078/unknown.png?width=398&height=642', 'Blazer algodão skinny bege',         'produto 30', 4,  700, 2, 5, 10,  0);

----------------- Forma Pagamento ----------------------

INSERT INTO forma_pagamento (nome)
VALUES
    ('Cartão de credito'),
    ('Boleto'),
    ('PIX');

---------------- Status do Pedidos ---------------------

INSERT INTO status_pedidos (nome)
VALUES
    ('Pendente'),
    ('Finalizado'),
    ('Cancelado');

-------------------- Usuário 1 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'igor@gmail.com', MD5('igor@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (1, 'Igor Anjos', 'Brasil', '74717171', 'R. Igor Qd joze lote 1 ', 'Igor dos campos', 'GO', 'Igor');

-------------------- Usuário 2 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'gustavoAlves@gmail.com', MD5('gustavoAlves@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (2, 'Gustavo Alves', 'Brasil', '74727171', 'R. Gustavo Qd joao lote 1 ', 'Gustavo dos campos', 'GO', 'Gustavo');

-------------------- Usuário 3 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'gustavohenrique@gmail.com', MD5('gustavohenrique@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (3, 'Gustavo Henrique', 'Brasil', '74737171', 'R. Gustavo Qd Eric lote 1 ', 'Gustavo dos campos', 'GO', 'Eric');


-------------------- Pedidos  ------------------------
INSERT INTO pedidos (id_usuario, preco_total, id_forma_pagamento, status, data, hora)
VALUES
    (1, 100, 1, 1, now(), CURRENT_TIME(0)),
    (1, 4000, 1, 1, now(),  CURRENT_TIME(0)),
    (2, 587, 3, 1,  now(), CURRENT_TIME(0)),
    (3, 600, 3, 1,  now(), CURRENT_TIME(0));



Insert INTO compras (id_pedido, id_produto, preco_subtotal, quantidade, tamanho)
VALUES
    (1, 10, 50, 1, 'g'),
    (1, 5, 50, 1, 'm'),
    (2, 10, 50, 20, 'g'),
    (2, 1, 2000, 2, 'g'),
    (2, 3, 500, 2, 'p'),
    (3, 5, 200, 4, 'm'),
    (3, 10, 200, 4, 'p'),
    (3, 7, 187, 1, 'g'),
    (4, 15, 600, 1, 'm');
    `
  );
};

// Referentes a Produtos  ------------------------------------------------

// Pegar todos os produtos do banco
export const getProdutos = () => {
  return bancoDeDados.query(
    `
    SELECT
      pd.id,
      pd.imagem,
      pd.nome,
      pd.preco,
      pd.descricao,
      pd.id_categoria,
      ct.nome "nome_categoria",
      pd.quantidade_p,
      pd.quantidade_m,
      pd.quantidade_g,
      pd.desconto 
    FROM produtos as pd
    JOIN categorias as ct
    ON pd.id_categoria = ct.id
    ORDER BY pd.id
    `
  );
};

// Pegar produtos por categoria
export const getProdutosByIdCategoria = (idCategoria) => {
  return bancoDeDados.query(
    `
  SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
  FROM produtos as pd
  JOIN categorias as ct
  on pd.id_categoria = ct.id
  WHERE ct.id = $1

    `,
    [idCategoria]
  );
};

// Pegar produtos por Id
export const getProdutosById = (idProduto) => {
  return bancoDeDados.query(
    `
  SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
  FROM produtos as pd
  JOIN categorias as ct
  on pd.id_categoria = ct.id
  WHERE pd.id = $1

    `,
    [idProduto]
  );
};

// Atualizar produtos do banco de dados
export const atualizarDadosDeProdutos = (newDadosProduto, idProduto) => {
  const {
    imagem,
    nome,
    descricao,
    preco,
    quantidadeP,
    quantidadeM,
    quantidadeG,
    desconto,
  } = newDadosProduto;
  const id = Number(idProduto);

  bancoDeDados.none(
    `
    UPDATE produtos
    SET
      imagem = $1,
      nome = $2,
      descricao = $3,
      preco = $4,
      quantidade_p = $5,
      quantidade_m = $6,
      quantidade_g = $7,
      desconto = $8
    WHERE id = $9
    `,
    [
      imagem,
      nome,
      descricao,
      preco,
      quantidadeP,
      quantidadeM,
      quantidadeG,
      desconto,
      id,
    ]
  );
};

// Inserir produtos no banco de dados

export const insertProduto = (newProduto) => {
  const {
    imagem,
    nome,
    descricao,
    idCategoria,
    preco,
    quantidadeP,
    quantidadeM,
    quantidadeG,
    desconto,
  } = newProduto;
  bancoDeDados.none(
    `
    INSERT INTO produtos (imagem, nome, descricao, id_categoria, preco, quantidade_p, quantidade_m, quantidade_g, desconto)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `,
    [
      imagem,
      nome,
      descricao,
      idCategoria,
      preco,
      quantidadeP,
      quantidadeM,
      quantidadeG,
      desconto,
    ]
  );
};

// subtrair quantidades de produtos com um tamanho selecionado
export const subtrairProduto = (quantidadeTamanhoTexto, sobra, idProduto) => {
  const query = `
  UPDATE produtos
    SET 
      ${quantidadeTamanhoTexto} = ${sobra}
    WHERE id = ${idProduto};
  `;
  bancoDeDados.none(query);
};

// Referentes a Cadastros e Dados Cadastrais  ---------------------------

// Pegar dados de usuários cadastrados por id

export const getDadosUsuariosIyId = (idUsuario) => {
  const dados = bancoDeDados
    .query("SELECT * FROM dados_usuarios WHERE id_usuario = $1", [idUsuario])
    .then((dados) => {
      if (dados.length === 0) {
        throw new Error("Usuario não existe");
      }

      return dados;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return dados;
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
  bancoDeDados
    .one(
      "INSERT INTO usuarios (ativo, email, senha, data) VALUES (true, $1, MD5($2), now()) RETURNING id",
      [email, senha]
    )
    .then((usuario) => {
      bancoDeDados
        .none(
          `INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
      VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            usuario.id,
            nomeCompleto,
            pais,
            cep,
            logradouro,
            cidade,
            estado,
            complemento,
          ]
        )
        .catch((err) => {
          bancoDeDados.none(
            `INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
            VALUES
                ($1, 'Perfil', 'Brasil', '74747474', 'Logradouro', 'Cidade', 'GO', 'Complemento')`,
            [usuario.id]
          );
          throw new Error(err.message);
        });
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

// Inativar usuarios cadastrados
export const inativarUsuarioById = (idUsuario) => {
  bancoDeDados.none("UPDATE usuarios SET ativo = false WHERE id = $1;", [
    idUsuario,
  ]);
};

// Efetuar login verificar dados e gerar token de acesso
export const makeLogin = (email) => {
  const query = `select id, email, senha, admin FROM usuarios WHERE email ILIKE '%${email}%'`;
  return bancoDeDados.one(query);
};

// Atualizar dados cadastrais
export const updateCadastro = (idUsuario, newDados) => {
  const { nomeCompleto, pais, cep, logradouro, cidade, estado, complemento } =
    newDados;

  const id = Number(idUsuario);
  bancoDeDados.none(
    "UPDATE dados_usuarios SET nome_completo = $1, pais = $2, cep = $3, logradouro = $4, cidade = $5, estado = $6, complemento = $7 WHERE id_usuario = $8;",
    [
      nomeCompleto,
      pais,
      cep,
      logradouro,
      cidade,
      estado,
      complemento,
      idUsuario,
    ]
  );
};

// Atualizar email e senha cadastradas
export const changeEmailPassword = (newDados, idUsuario) => {
  const { email, senha } = newDados;
  bancoDeDados.none(
    "UPDATE usuarios SET email = $1, senha = MD5($2) WHERE id = $3;",
    [email, senha, idUsuario]
  );
};

// Atualizar Usuario para ADM
export const changeAdmUsuario = (idUsuario) => {
  bancoDeDados.none("UPDATE usuarios SET admin = true WHERE id = $1;", [
    idUsuario,
  ]);
};

// Referentes a pedidos --------------------------------

// Pegar todos os pedidos existentes
export const getPedidos = () => {
  return bancoDeDados.query(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id`
  );
};

// Pegar todos os pedidos de um usuário

export const getPedidosByIdUsuario = (userId) => {
  return bancoDeDados.query(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.id as "idStatus", sp.nome "status", pd.id_forma_pagamento as "idFormaDePagamento", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id WHERE pd.id_usuario = $1;`,
    [userId]
  );
};

// Pegar dados informações de um pedido

export const getInfoPedidoById = (idPedido) => {
  return bancoDeDados.one(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id WHERE pd.id = $1;`,
    [idPedido]
  );
};

// Pegar produtos de um pedido

export const getProdutosByPedidoId = (idPedido) => {
  return bancoDeDados.query(
    `SELECT cp.id, cp.id_pedido, cp.id_produto, cp.preco_subtotal, cp.quantidade, cp.tamanho, pd.nome FROM compras as cp JOIN produtos as pd ON cp.id_produto = pd.id WHERE id_pedido = $1;`,
    [idPedido]
  );
};

// Inserir um novo pedido
export const insertPedido = (newPedido) => {
  const { idUsuario, precoTotal, idFormaPagamento } = newPedido;
  return bancoDeDados.one(
    "INSERT INTO pedidos (id_usuario, preco_total, id_forma_pagamento, status, data, hora) VALUES ($1, $2, $3, 1, now(), CURRENT_TIME(0)) RETURNING id",
    [idUsuario, precoTotal, idFormaPagamento]
  );
};

// Inserir produtos de um determinado pedido

export const insertProdutosByPedidoId = (idPedido, produtos) => {
  let listQuery = [];
  produtos.map((produto) => {
    listQuery.push(
      `( ${idPedido}, ${produto.idProduto}, ${produto.precoSubtotal}, ${produto.quantidade}, '${produto.tamanho}')`
    );
  });
  const produtosTexto = listQuery.join(", ");
  bancoDeDados.none(
    `INSERT INTO compras (id_pedido, id_produto, preco_subtotal, quantidade, tamanho) VALUES ${produtosTexto}`
  );
};

// Alterar informações de um pedido
export const updatePedido = (idPedidoUpdate, updatePedido) => {
  const { status, idFormaPagamento } = updatePedido;
  bancoDeDados.none(
    "UPDATE pedidos SET status = $1, id_forma_pagamento = $2  WHERE id = $3;",
    [status, idFormaPagamento, idPedidoUpdate]
  );
};

// Pegar todas as compras de todos os pedidos efeturados

export const getCompras = () => {
  return bancoDeDados.query("SELECT * FROM compras");
};
