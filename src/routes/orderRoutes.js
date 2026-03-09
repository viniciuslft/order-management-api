const express = require('express');
const orderController = require('../controllers/orderController');
const validateOrder = require('../middlewares/validateOrder');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItemInput:
 *       type: object
 *       required:
 *         - idItem
 *         - quantidadeItem
 *         - valorItem
 *       properties:
 *         idItem:
 *           type: string
 *           example: "2434"
 *         quantidadeItem:
 *           type: integer
 *           example: 1
 *         valorItem:
 *           type: number
 *           example: 1000
 *
 *     OrderInput:
 *       type: object
 *       required:
 *         - numeroPedido
 *         - valorTotal
 *         - dataCriacao
 *         - items
 *       properties:
 *         numeroPedido:
 *           type: string
 *           example: "v10089015vdb-01"
 *         valorTotal:
 *           type: number
 *           example: 10000
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *           example: "2023-07-19T12:24:11.529Z"
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItemInput'
 *
 *     OrderItemResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         orderId:
 *           type: string
 *           example: "v10089015vdb"
 *         productId:
 *           type: integer
 *           example: 2434
 *         quantity:
 *           type: integer
 *           example: 1
 *         price:
 *           type: number
 *           example: 1000
 *
 *     OrderResponse:
 *       type: object
 *       properties:
 *         orderId:
 *           type: string
 *           example: "v10089015vdb"
 *         value:
 *           type: number
 *           example: 10000
 *         creationDate:
 *           type: string
 *           format: date-time
 *           example: "2023-07-19T12:24:11.529Z"
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItemResponse'
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Order already exists
 */
router.post('/order', authenticateToken, validateOrder, orderController.createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: List all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *              type: array
*               items:
 *               $ref: '#/components/schemas/OrderResponse'
 *       401:
 *         description: Unauthorized
 */
router.get('/order/list', authenticateToken, orderController.listOrders);

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *      401:
 *         description: Unauthorized
 *       404:
 *         description: Order not found
 */
router.get('/order/:orderId', authenticateToken, orderController.getOrderById);

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     summary: Update an existing order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Order not found
 */
router.put('/order/:orderId', authenticateToken, validateOrder, orderController.updateOrder);

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb
 *     responses:
 *       204:
 *         description: Order deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Order not found
 */
router.delete('/order/:orderId', authenticateToken, orderController.deleteOrder);

module.exports = router;