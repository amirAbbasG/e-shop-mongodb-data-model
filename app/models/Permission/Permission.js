const { Schema, model, models } = require("mongoose");

const PermissionSchema = new Schema({
  permissionTitle: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Permissions",
  },
});

module.exports = models.Permissions || model("Permissions", PermissionSchema);
