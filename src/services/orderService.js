const { Order, Item } = require('../models');
const { mapOrderPayload } = require('../utils/orderMapper');

async function createOrder(payload) {
  const mappedOrder = mapOrderPayload(payload);

  const existingOrder = await Order.findByPk(mappedOrder.orderId);

  if (existingOrder) {
    const error = new Error('Order already exists.');
    error.statusCode = 409;
    throw error;
  }

  const createdOrder = await Order.create({
    orderId: mappedOrder.orderId,
    value: mappedOrder.value,
    creationDate: mappedOrder.creationDate
  });

  await Item.bulkCreate(mappedOrder.items);

  return await Order.findByPk(createdOrder.orderId, {
    include: [
      {
        model: Item,
        as: 'items'
      }
    ]
  });
}

async function getOrderById(orderId) {
  const order = await Order.findByPk(orderId, {
    include: [
      {
        model: Item,
        as: 'items'
      }
    ]
  });

  if (!order) {
    const error = new Error('Order not found.');
    error.statusCode = 404;
    throw error;
  }

  return order;
}

async function listOrders() {
  const orders = await Order.findAll({
    include: [
      {
        model: Item,
        as: 'items'
      }
    ],
    order: [['creationDate', 'DESC']]
  });

  return orders;
}

async function updateOrder(orderId, payload) {
  const existingOrder = await Order.findByPk(orderId);

  if (!existingOrder) {
    const error = new Error('Order not found.');
    error.statusCode = 404;
    throw error;
  }

  const mappedOrder = mapOrderPayload(payload);

  await existingOrder.update({
    value: mappedOrder.value,
    creationDate: mappedOrder.creationDate
  });

  await Item.destroy({
    where: { orderId }
  });

  await Item.bulkCreate(
    mappedOrder.items.map((item) => ({
      ...item,
      orderId
    }))
  );

  return await Order.findByPk(orderId, {
    include: [
      {
        model: Item,
        as: 'items'
      }
    ]
  });
}

async function deleteOrder(orderId) {
  const existingOrder = await Order.findByPk(orderId);

  if (!existingOrder) {
    const error = new Error('Order not found.');
    error.statusCode = 404;
    throw error;
  }

  await Item.destroy({
    where: { orderId }
  });

  await Order.destroy({
    where: { orderId }
  });
}

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
};