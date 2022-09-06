const express = require("express");
const postRouter = require("./routes/post.route");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server");
});
app.use("/posts", postRouter);

app.listen(4000, () => {
  console.log("server running on https://localhost:4000");
});
