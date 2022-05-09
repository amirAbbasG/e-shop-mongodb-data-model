const { Schema, model, models } = require("mongoose");

const BannerProductSchema = new Schema({
  banner: {
    type: Schema.Types.ObjectId,
    ref: "Banners",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
});

module.exports =
  models.BannerProducts || model("BannerProducts", BannerProductSchema);
