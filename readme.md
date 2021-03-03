#Minesweeper Node api

The idea of this project is to consume minesweeper-java.

## Start
You have to run a npm install and then run the command: node index.js
It will start the application in http://localhost:3000

You can use any of the following services:

* POST '/user/:username' : Creates user
* POST '/game' : Creates a game (Same body as Java API)
* POST '/game/:gameId/flag/:row/:column' : Flag a cell
* POST '/game/:gameId/question-mark/:row/:column': Question mark a cell
* POST '/game/:gameId/dismark/:row/:column' : Unmark a cell
* POST '/game/:gameId/open/:row/:column': Open a cell
