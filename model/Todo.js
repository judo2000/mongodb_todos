const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  userId: {
    // object id type,
    type: Schema.Types.ObjectId,
    // ref means which collection does this objectId reference
    ref: "User",
    index: true,
  },
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;
