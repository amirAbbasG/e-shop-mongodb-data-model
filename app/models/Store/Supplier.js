const { Schema, model, models } = require("mongoose");

const SupplierSchema = new Schema({
  supplierName: {
    type: String,
    required: true,
  },
  supplierCode: {
    type: String,
    required: true,
  },
});

module.exports = models.Suppliers || model("Suppliers", SupplierSchema);
