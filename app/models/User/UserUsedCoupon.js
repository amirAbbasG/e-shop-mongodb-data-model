const { Schema, model, models } = require("mongoose");

const UserUsedCouponSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  coupon: {
    type: Schema.Types.ObjectId,
    ref: "Coupons",
    required: true,
  },
});

module.exports =
  models.UserUsedCoupons || model("UserUsedCoupons", UserUsedCouponSchema);
