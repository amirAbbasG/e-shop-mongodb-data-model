const { Schema, model, models } = require("mongoose");

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  replay: {
    type: String,
  },
  score: {
    type: Schema.Types.Decimal128,
    default: 0,
    max: 5,
    min: 0,
  },
  createDate: {
    type: Date,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
});

module.exports = models.Comments || model("Comments", CommentSchema);
