const { Schema, model, models } = require("mongoose");

const decimal = Schema.Types.Decimal128;

const OrderDetailSchema = new Schema({
  count: {
    type: Number,
    required: true,
  },
  consumerPrice: {
    type: decimal,
    required: true,
  },
  currentPrice: {
    type: decimal,
    required: true,
  },
  salePrice: {
    type: decimal,
    required: true,
  },
  discountAmount: {
    type: decimal,
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  createDate: {
    type: Date,
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
});

module.exports =
  models.OrderDetails || model("OrderDetails", OrderDetailSchema);
