const { Schema, model, models } = require("mongoose");

const decimal = Schema.Types.Decimal128;

const PaymentSchema = new Schema({
  amount: {
    type: decimal,
    required: true,
  },
  refId: {
    type: String,
    required: true,
  },
  terminalId: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  successful: {
    type: Boolean,
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
});

module.exports = models.Payments || model("Payments", PaymentSchema);
