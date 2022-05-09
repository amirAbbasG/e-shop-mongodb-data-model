const { Schema, model, models } = require("mongoose");

const StatusSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = models.Statuses || model("Statuses", StatusSchema);
