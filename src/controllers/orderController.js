const orderService = require('../services/orderService');

async function createOrder(req, res, next) {
  try {
    const order = await orderService.createOrder(req.body);

    return res.status(201).json(order);
  } catch (error) {
    return next(error);
  }
}

async function getOrderById(req, res, next) {
  try {
    const { orderId } = req.params;
    const order = await orderService.getOrderById(orderId);

    return res.status(200).json(order);
  } catch (error) {
    return next(error);
  }
}

async function listOrders(req, res, next) {
  try {
    const orders = await orderService.listOrders();

    return res.status(200).json(orders);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createOrder,
  getOrderById,
  listOrders
};