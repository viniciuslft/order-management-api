function normalizeOrderId(numeroPedido) {
  return numeroPedido.split('-')[0];
}

function mapOrderPayload(payload) {
  const orderId = normalizeOrderId(payload.numeroPedido);

  return {
    orderId,
    value: payload.valorTotal,
    creationDate: new Date(payload.dataCriacao),
    items: payload.items.map((item) => ({
      orderId,
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
}

module.exports = {
  mapOrderPayload
};