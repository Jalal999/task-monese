# Tic-tac-toe game created by Jalal

This project was created by Jalal Mammadli. To play the game, first you need to enter two names for the players. When the game is finished, "Restart Game" pops up on top of the game board table. While playing, you can navigate to Scoreboard and vice versa. When one of players wins, its score is increased in Scoreboard. If you restart the game by clicking the button, play the game again, it will take the previous score of the players(if they have played before), and will update that score. Also previous winner player will be first player even if it is given as a second player.

## Guideline to run the app

First, you need to download the code from the repository and open in Visual Studio Code. Then, to able to run the code, you need to write the below script in the terminal:

### `npm install'

It will install all needed dependencies to able to run the app.

### `npm start'

It will start running the application in development mode. It will either open http://localhost:3000 in your default browser when it finishes configuration, or you might need to open it in your browser.


-----------------------------
**Note: If the above guideline does NOT help to run the app, below installations can help you...**

In case if it says error for the libraries/dependencies used in the project, below are the scripts that might be helpful to solve it.

### `npm install react-hook-form'

Will install all needed dependencies to be able to use useForm hook.

### `npm install react-router-dom@6`

Installs the React Router library(version 6) which is used in my app to navigate between pages/components.

### `npm install @reduxjs/toolkit`

Installs toolset dependencies of Redux Toolkit which is used to keep data of game board and players' condition to control the state of the app.

### `npm install react react-redux`

Installs needed configuration/dependencies to be eligible to use redux toolkit's features.
