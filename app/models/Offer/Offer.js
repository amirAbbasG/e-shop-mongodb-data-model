const { Schema, model, models } = require("mongoose");

const OfferSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = models.Offers || model("Offers", OfferSchema);
