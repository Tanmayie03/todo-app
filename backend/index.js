const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  try {
    const updatedTodo = await todo.findByIdAndUpdate(
      req.body.id,
      { $set: { completed: true } }, // Update completed field
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({
        msg: "Todo not found",
      });
    }

    res.json({
      msg: "Todo marked as completed",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Failed to update todo",
      error: error.message,
    });
  }
});

app.listen(3000);
