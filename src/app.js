const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Order Management API is running.'
  });
});

app.use(orderRoutes);
app.use(errorHandler);

module.exports = app;