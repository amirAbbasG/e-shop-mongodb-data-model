const { Schema, model, models } = require("mongoose");

const CategoryDetailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "CategoryDetails",
  },
  categoryDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "CategoryDetails",
    },
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

module.exports =
  models.CategoryDetails || model("CategoryDetails", CategoryDetailSchema);
