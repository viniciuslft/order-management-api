const Joi = require('joi');

const itemSchema = Joi.object({
  idItem: Joi.string().trim().required(),
  quantidadeItem: Joi.number().integer().greater(0).required(),
  valorItem: Joi.number().greater(0).required()
});

const orderSchema = Joi.object({
  numeroPedido: Joi.string().trim().required(),
  valorTotal: Joi.number().greater(0).required(),
  dataCriacao: Joi.string().required(),
  items: Joi.array().items(itemSchema).min(1).required()
});

function validateOrder(req, res, next) {
  const { error } = orderSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map((detail) => detail.message)
    });
  }

  return next();
}

module.exports = validateOrder;