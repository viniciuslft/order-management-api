const sequelize = require('../config/database');
const Order = require('./Order');
const Item = require('./Item');

const db = {};

db.sequelize = sequelize;
db.Order = Order;
db.Item = Item;

module.exports = db;