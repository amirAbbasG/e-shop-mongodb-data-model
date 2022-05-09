const { Schema, model, models } = require("mongoose");

const OfferProductSchema = new Schema({
  offer: {
    type: Schema.Types.ObjectId,
    ref: "Offers",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
});

module.exports =
  models.OfferProducts || model("OfferProducts", OfferProductSchema);
