import { client } from "./config.mjs";

export const sendMessageWhatsappTwilio = async (mensagem) => {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+556281986987",
      body: `${mensagem}`,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export const mensagemFinalizarCompra = (produtos, idPedido) => {
  let precoTotal = 0;
  produtos.map((produto) => {
    precoTotal += Number(produto.precoSubtotal);
  });
  const mensagem = `
  Olá,
  Seu pedido foi gerado:
  ID: ${idPedido}, 
  Total: ${precoTotal.toFixed(2)}
  Confirme agora o Pagamento: 
  https://kingsman-apitest.netlify.app/usuario/pedidos
  `;

  sendMessageWhatsappTwilio(mensagem);
};
