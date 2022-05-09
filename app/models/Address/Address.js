const { Schema, model, models } = require("mongoose");

const AddressSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  exactAddress: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  postalCode: {
    type: String,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "Cities",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
  },
});

module.exports = models.Addresses || model("Addresses", AddressSchema);
