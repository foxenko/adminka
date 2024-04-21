const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { mainRouter, gamesRouter } = require("./routes");

const app = express();
const PORT = 3000;

app.use(
  express.static(path.join(__dirname, "public")),
  bodyParser.json(),
  mainRouter,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server has been started on: http://localhost:${PORT}`);
});
