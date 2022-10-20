### Zerar banco de dados

> zerar Banco de Dados endpoint: /
>
> method: "delete"

---

### Referentes a Produtos

> ## Pegar todos os produtos do banco
>
> endpoint: /produtos/info
>
> method: "get"

> ## Pegar produtos por categoria
>
> endpoint: /produtos/categoria/:id_categoria
>
> methoc: "get"

> ## Pegar produtos por Id
>
> endpoint: /produtos/:id
>
> method: "get"

> ## Atualizar produtos do banco de dados
>
> endpoint: /produtos/atualizar/:id
>
> method: "put"
>
> body: {
> imagem: "http:>Pudim.com",
>
> nome: "pudimzim",
>
> descricao: "Este produto é baum",
>
> preco: 1400,
>
> quantidadeP: 1,
>
> quantidadeM: 2,
>
> quantidadeG: 3,
>
> desconto: 100,
>
> }

> ## Inserir produto no banco de dados
>
> endpoint: /produtos/cadastrar/
>
> method: "post"
>
> body: {
>
> imagem: "http:>pave.com",
>
> nome: "Pra ver",
>
> descricao: "Não é pra comer",
>
> idCategoria: 3,
>
> preco: 1500,
>
> quantidadeP: 0,
>
> quantidadeM: 0,
>
> quantidadeG: 0,
>
> desconto: 2,
>
> }

> ## subtrair quantidades de produtos com um tamanho selecionado
>
> endpoint: /produtos/subtrair/:id
>
> method: "put"
>
> body: {quantidade: 4, tamanho: "m"}

---

## Referentes a Cadastros e Dados Dadastrais

---

> ## Pegar dados de usuários cadastrados por id
>
> endpoint: /usuarios/dados/:id_usuario
>
> method: get

> ## Cadastrar novos usuarios
>
> endpoint: /usuarios/cadastro/novo
>
> method: "post"
>
> body: {email: "pedro@gmail.com",
>
> senha: "pedrinho123",
>
> nomeCompleto: "Pedro da Silva",
>
> pais: "Brasil",
>
> cep: "74757171",
>
> logradouro: "Casa do Pedro",
>
> cidade: "Goiânia",
>
> estado: "GO",
>
> complemento: "Pedro",
>
> }

> ## Inativar usuarios cadastrados
>
> endpoint: /usuarios/info/inativar/:id_usuario
>
> method: "put"

> ## Efetuar login, verificar dados e gerar token de acesso
>
> endpoint: /login/:email/:senha
>
> method: "get"

> ## Atualizar dados cadastrais
>
> enpoint: /usuarios/info/update/:id
>
> method: "put"
>
> body: {
>
> nomeCompleto: "Joca da Silva",
>
> pais: "Brasil",
>
> cep: "74717171",
>
> logradouro: "R. joca Qd joca lote 1 ",
>
> cidade: "Goiania",
>
> estado: "GO",
>
> complemento: "joca",
>
> }

> ## Atualizar email e senha cadastradas
>
> endpoint: /usuarios/update/:id
>
> method: "put"
>
> body: {email: "joaozinho@gamil.com", senha: "joaozinho"}

> ## Atualizar Usuario para ADM
>
> endpoint: /usuarios/adm/update/:id
>
> method: "put"

## Referentes a pedidos

> ## Pegar dados de todos os pedidos existentes
>
> endpoint: /pedidos/info
>
> method: "get"

> ## Pegar todos os pedidos de um usuário
>
> endpoint: /pedidos/info/usuarios/:id_usuario
>
> method: "get"

> ## Pegar dados informações de um pedido
>
> endpoint: /pedidos/info/:id_pedido
>
> method: "get"

> ## Pegar produtos de um pedido
>
> endpoint: /pedidos/info/produtos/:id_pedido
>
> method: "get"

> ## Inserir novo pedido
>
> endpoint: /pedidos/novo
>
> method: "post"
>
> body: {idUsuario: 3, precoTotal: "1200", idFormaPagamento: 2}

> ## Inserir produtos de um determinado pedido
>
> endpoint: /pedidos/produtos/novo/:id_pedido
>
> method: "post"
>
> body: [
>
> {
>
> idProduto: 1,
>
> precoSubtotal: 200,
>
> quantidade: 2,
>
> tamanho: "m",
>
> },
>
> {
>
> idProduto: 1,
>
> precoSubtotal: 200,
>
> quantidade: 2,
>
> tamanho: "p",
>
> },
>
> ...
>
> ]

> ## Alterar informações de um pedido
>
> endpoint: /pedidos/info/:id_pedido
>
> method: "put"
>
> body: {status: 2, idFormaPagamento: 1 }

> ## Referente ao envio de mensagens aos canais de comunicação com os clientes
>
> endpoint: /contatocliente/whatsapp/email
>
> method: "post"
>
> body: {email: "test@example.com", formaDePagamento: "Cartão de Credito"}
