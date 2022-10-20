const categoria = [
  {
    id: 1,
    nome: "Smoking",
  },
  {
    id: 2,
    nome: "Modern Fit",
  },
  {
    id: 3,
    nome: "Terno Conjunto",
  },
  {
    id: 4,
    nome: "Blazer",
  },
];

const produtos = [
  {
    id: 1,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008728067188994098/unknown.png?width=491&height=634",
    nome: "Smoking Prata",
    descricao: "produto 1",
    id_categoria: categoria[0].id,
    preco: 500.0,
    quantidade_p: 2,
    quantidade_m: 5,
    quantidade_g: 0,
    desconto: 0,
  },
  {
    id: 2,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008728216627843134/unknown.png?width=491&height=634",
    nome: "Smoking Vinho Prateado",
    descricao: "produto 2",
    id_categoria: categoria[0].id,
    preco: 750.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 15,
  },
  {
    id: 3,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008728475261227088/unknown.png?width=491&height=634",
    nome: "Smoking Azul Escuro",
    descricao: "produto 3",
    id_categoria: categoria[0].id,
    preco: 500.0,
    quantidade_p: 2,
    quantidade_m: 0,
    quantidade_g: 10,
    desconto: 10,
  },
  {
    id: 4,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008730638674841620/unknown.png?width=493&height=633",
    nome: "Terno Modern Fit Azul",
    descricao: "produto 4",
    id_categoria: categoria[1].id,
    preco: 1500.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 0,
  },
  {
    id: 5,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008730793285275799/unknown.png?width=406&height=634",
    nome: "Terno Modern Fit Branco",
    descricao: "produto 5",
    id_categoria: categoria[1].id,
    preco: 1500.0,
    quantidade_p: 2,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 0,
  },
  {
    id: 6,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008730954036162600/unknown.png?width=482&height=634",
    nome: "Terno Modern Fit Cinza Escuro",
    descricao: "produto 6",
    id_categoria: categoria[1].id,
    preco: 2000.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 25,
  },
  {
    id: 7,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008734697427324948/unknown.png?width=519&height=634",
    nome: "Terno Conjunto Rosa",
    descricao: "produto 7",
    id_categoria: categoria[2].id,
    preco: 3500.0,
    quantidade_p: 2,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 8,
  },
  {
    id: 8,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008735052999430174/unknown.png?width=362&height=634",
    nome: "Terno Conjunto Azul Claro",
    descricao: "produto 8",
    id_categoria: categoria[2].id,
    preco: 4000.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 0,
  },
  {
    id: 9,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008735264186847232/unknown.png?width=362&height=634",
    nome: "Terno Conjunto Cinza Xadrez",
    descricao: "produto 9",
    id_categoria: categoria[2].id,
    preco: 4000.0,
    quantidade_p: 2,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 10,
  },
  {
    id: 10,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008740609793740871/unknown.png?width=498&height=634",
    nome: "Blazer Algodão Azul Claro",
    descricao: "produto 10",
    id_categoria: categoria[3].id,
    preco: 1800.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 60,
  },
  {
    id: 11,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008740789976830055/unknown.png?width=422&height=634",
    nome: "Blazer Slim Fit Preto Cetim",
    descricao: "produto 11",
    id_categoria: categoria[3].id,
    preco: 2000.0,
    quantidade_p: 2,
    quantidade_m: 5,
    quantidade_g: 0,
    desconto: 0,
  },
  {
    id: 12,
    imagem:
      "https://media.discordapp.net/attachments/1008727983223230494/1008741114108444834/unknown.png?width=569&height=634",
    nome: "Blazer Slim Vinho Cetim",
    descricao: "produto 12",
    id_categoria: categoria[3].id,
    preco: 2500.0,
    quantidade_p: 0,
    quantidade_m: 5,
    quantidade_g: 10,
    desconto: 0,
  },
];

function getProdutos() {
  return produtos;
}
module.exports = getProdutos;
