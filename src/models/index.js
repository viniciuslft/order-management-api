const sequelize = require('../config/database');
const Order = require('./Order');

const db = {};

db.sequelize = sequelize;
db.Order = Order;

module.exports = db;