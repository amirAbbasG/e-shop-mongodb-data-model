const { Schema, model, models } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  categoryDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "CategoryDetails",
    },
  ],
});

module.exports = models.Categories || model("Categories", CategorySchema);
