const express = require("express");
const path = require("path");
const { mainRouter, gamesRouter } = require("./routes");

const app = express();
const PORT = 3000;

app.use(
  express.static(path.join(__dirname, "public")),
  mainRouter,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server has been started on: http://localhost:${PORT}`);
});
