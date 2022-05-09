const { Schema, model, models } = require("mongoose");

const RolePermissionSchema = new Schema({
  permission: {
    type: Schema.Types.ObjectId,
    ref: "Permissions",
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
    required: true,
  },
});

module.exports =
  models.RolePermissions || model("RolePermissions", RolePermissionSchema);
