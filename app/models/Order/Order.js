const { Schema, model, models } = require("mongoose");

const decimal = Schema.Types.Decimal128;

const OrderSchema = new Schema({
  totalConsumerPrice: {
    type: decimal,
    required: true,
  },
  totalCurrentPrice: {
    type: decimal,
    required: true,
  },
  deliveryCost: {
    type: decimal,
    required: true,
  },
  totalDiscountAmount: {
    type: decimal,
    required: true,
  },
  deliveryCode: {
    type: String,
    required: true,
    max: 5,
    min: 5,
  },
  createDate: {
    type: Date,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  coupon: {
    type: Schema.Types.ObjectId,
    ref: "Coupons",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },

  orderDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderDetails",
    },
  ],
  payments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Payments",
    },
  ],
  orderStatuses: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderStatuses",
    },
  ],
});

module.exports = models.Orders || model("Orders", OrderSchema);
