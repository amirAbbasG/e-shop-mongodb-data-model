const { Schema, model, models } = require("mongoose");

const UserRoleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
    required: true,
  },
});

module.exports = models.UserRoles || model("UserRoles", UserRoleSchema);
