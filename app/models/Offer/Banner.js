const { Schema, model, models } = require("mongoose");

const BannerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  linkUrl: {
    type: String,
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

module.exports = models.Banners || model("Banners", BannerSchema);
