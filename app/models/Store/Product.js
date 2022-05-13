const { Schema, model, models } = require("mongoose");

const decimal = Schema.Types.Decimal128;

const ProductSchema = new Schema({
  barcode: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
    min: 2,
  },
  description: {
    type: String,
  },
  discountPercentage: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
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
  quantityInStock: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  categoryDetail: {
    type: Schema.Types.ObjectId,
    ref: "CategoryDetails",
  },

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  orderDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderDetails",
    },
  ],
});

module.exports = models.Products || model("Products", ProductSchema);
