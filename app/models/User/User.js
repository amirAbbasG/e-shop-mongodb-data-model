const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    min: 3,
  },
  mobileNumber: {
    type: String,
    required: true,
    max: 11,
    min: 11,
    unique: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
  },
  userOrders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Addresses",
    },
  ],
  userComments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

module.exports = models.Users || model("Users", UserSchema);
