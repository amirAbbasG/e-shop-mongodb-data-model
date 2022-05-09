const { Schema, model, models } = require("mongoose");

const UserFavoriteStoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
});

module.exports =
  models.UserFavoriteStores ||
  model("UserFavoriteStores", UserFavoriteStoreSchema);
