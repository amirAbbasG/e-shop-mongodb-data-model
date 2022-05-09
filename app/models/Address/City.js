const { Schema, model, models } = require("mongoose");

const CitySchema = new Schema({
  cityName: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },

  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Addresses",
    },
  ],
});

module.exports = models.Cities || model("Cities", CitySchema);
