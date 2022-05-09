const { Schema, model, models } = require("mongoose");

const StoreProductSchema = new Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: "Sotres",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
});

module.exports =
  models.StoreProducts || model("StoreProducts", StoreProductSchema);
