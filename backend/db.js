const mongoose = require("mongoose");
const { Schema } = require("zod");
mongoose.connect(
  "mongodb+srv://tanmayiepatil:HtUCr2PVfrwPkGpG@cluster0.nz2g2.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
