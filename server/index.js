const express = require("express");
const app = express();
const port = 4200;
const path = require("path");

app.use("/", express.static(path.resolve("..", "dist", "task-store")));
app.all("*", function (req, res, next) {
  res.sendFile(path.resolve("..", "dist", "task-store", "index.html"));
});
app.listen(port, () => {
  console.log(`Task store ${port}`);
});
