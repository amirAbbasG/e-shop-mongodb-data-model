const { Schema, model, models } = require("mongoose");

const RoleSchema = new Schema({
  roleTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = models.Roles || model("Roles", RoleSchema);
