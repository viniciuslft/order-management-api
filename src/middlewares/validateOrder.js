const Joi = require('joi');

const orderSchema = Joi.object({
  numeroPedido: Joi.string().required(),
  valorTotal: Joi.number().required(),
  dataCriacao: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        idItem: Joi.string().required(),
        quantidadeItem: Joi.number().required(),
        valorItem: Joi.number().required()
      })
    )
    .min(1)
    .required()
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