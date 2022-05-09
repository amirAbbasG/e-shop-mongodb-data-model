const { Schema, model, models } = require("mongoose");

const ProductSupplierSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: "Suppliers",
    required: true,
  },
});

module.exports =
  models.ProductSuppliers || model("ProductSuppliers", ProductSupplierSchema);
