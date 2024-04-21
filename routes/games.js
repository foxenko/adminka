const gamesRouter = require("express").Router();
const { sendAllGames, deleteGame, addGame } = require("../controllers/games");
const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, updateGamesFile, deleteGame, );
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  addGame
);

module.exports = gamesRouter;
