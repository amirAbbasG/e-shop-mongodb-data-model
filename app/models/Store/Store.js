const { Schema, model, models } = require("mongoose");

const StoreSchema = new Schema({
  storeName: {
    type: String,
    required: true,
    min: 2,
  },
  storeImage: {
    type: String,
  },

  deliveryCost: {
    type: Schema.Types.Decimal128,
    default: 0,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Addresses",
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  coupons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coupons",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
});

module.exports = models.Stores || model("Stores", StoreSchema);
