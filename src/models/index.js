const sequelize = require('../config/database');
const Order = require('./Order');
const Item = require('./Item');

Order.hasMany(Item, {
  foreignKey: 'orderId',
  sourceKey: 'orderId',
  as: 'items',
  onDelete: 'CASCADE'
});

Item.belongsTo(Order, {
  foreignKey: 'orderId',
  targetKey: 'orderId',
  as: 'order'
});

const db = {};

db.sequelize = sequelize;
db.Order = Order;
db.Item = Item;

module.exports = db;