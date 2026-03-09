const express = require('express');
const orderController = require('../controllers/orderController');
const validateOrder = require('../middlewares/validateOrder');

const router = express.Router();

router.post('/order', validateOrder, orderController.createOrder);
router.get('/order/list', orderController.listOrders);
router.get('/order/:orderId', orderController.getOrderById);

module.exports = router;