
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(taskRoutes); 

const PORT = 3000;
mongoose.connect("mongodb://localhost:27017/taskdb");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
