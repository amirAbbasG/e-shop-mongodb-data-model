const { Schema, model, models } = require("mongoose");

const OrderStatusSchema = new Schema({
  createDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Statuses",
    required: true,
  },
});

module.exports =
  models.OrderStatuses || model("OrderStatuses", OrderStatusSchema);
