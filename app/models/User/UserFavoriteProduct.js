const { Schema, model, models } = require("mongoose");

const UserFavoriteProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
});

module.exports =
  models.UserFavoriteProducts ||
  model("UserFavoriteProducts", UserFavoriteProductSchema);
