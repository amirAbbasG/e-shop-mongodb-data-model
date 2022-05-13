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
  isProposed: {
    type: Boolean,
    default: false,
  },
  contractDate: {
    type: Date,
  },
});

module.exports = models.Suppliers || model("Suppliers", SupplierSchema);
