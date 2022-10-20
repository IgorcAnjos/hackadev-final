import { GeraPedidoContext } from ".";

const GeraPedidoProvider = ({ children }) => {
  const urlAPI = process.env.REACT_APP_DEFURLAPI;
  const method = "post";

  const idFormaDePagamento = JSON.parse(localStorage.pagamento);
  const listaCarrinho = JSON.parse(localStorage.listaCarrinho);

  const usuario = JSON.parse(localStorage.login);

  const ProdutosPedidos = listaCarrinho.map((item) => {
    const idProduto = Number(String(item.id).substring(0, item.id.length - 1));
    const precoSubtotal = Number(item.preco) * Number(item.quantidade);
    const quantidade = Number(item.quantidade);
    const tamanho = String(item.id).slice(-1);
    return {
      idProduto: idProduto,
      precoSubtotal: precoSubtotal,
      quantidade: quantidade,
      tamanho: tamanho,
    };
  });

  const calcTotal = () => {
    let total = 0;
    listaCarrinho.map(
      (produto) => (total += produto.quantidade * produto.preco)
    );

    return total;
  };

  const precoTotal = calcTotal();

  const Pedido = {
    idUsuario: usuario.id,
    precoTotal,
    idFormaDePagamento: idFormaDePagamento,
  };
  return (
    <GeraPedidoContext.Provider
      value={{ urlAPI, Pedido, ProdutosPedidos, method }}
    >
      {children}
    </GeraPedidoContext.Provider>
  );
};

export default GeraPedidoProvider;
