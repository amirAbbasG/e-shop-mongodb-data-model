const { Schema, model, models } = require("mongoose");

const decimal = Schema.Types.Decimal128;

const CouponSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  maxDiscountAmount: {
    type: decimal,
    required: true,
  },
  minOrderAmount: {
    type: decimal,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  stratDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
});

module.exports = models.Coupons || model("Coupons", CouponSchema);
