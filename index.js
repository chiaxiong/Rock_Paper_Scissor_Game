"use strict"

// 1. prompt user for valid result(i.e. rock, paper, scissor, lizard, spock)
// 2. create an array to store value of rock, paper, scissor, lizard, spock
// 3. display which player won the round
// 4. display winner best of three
// 5. want human vs AI and human vs human

function app() {
  Game = new Game();
  Game.runGame();
}

class Game {
  constructor() {
  }

  runGame() {
    this.displayRules();
  }

  buildPlayer() {
    let numberOfPlayers = prompt("How many do you have?");
    let playerResults = parseInt(numberOfPlayers);

    if (playerResults === 2) {
      this.playerOne = new Player(prompt("What is the name of Player One?"));
      this.playerTwo = new Player(prompt("What is the name of Player Two?"));
    }
    else if (playerResults === 1) {
      this.playerOne = new Player(prompt("What is the name of Player One?"));
      this.playerTwo = new Ai();
    }
    return numberOfPlayers;
  }

  displayRules() {
    console.log("Welcome to a game of Rock, Paper, Scissors, Lizard, and Spock");
    console.log("Best of three is the winner");
  }

  displayWinner() {

  }
}

//Player class
class Player {
  constructor(name) {
    this.score = 0;
    this.name = name;
    this.gesture = "";
  }

  callGestures() {
    let gestureInput = promptFor("Input your gesture.", gestureValidation).toLowerCase();
    this.gesture = gestureInput;
    console.log("Gesture Result is: " + this.gesture);
  }
}

class Human extends Player {
  constructor(name) {
    super(name);
  }
}

class Ai extends Player {
  constructor() {
    super();
  }

  aiName() {
    let randomName = ["Abe", "Brittney", "Charles", "Davis", "Edward", "Frankie", "Gina", "Hanna"];

    let choosenName = Math.floor(Math.random(randomName.length) + 1);
    this.name = new Ai(choosenName);
  }
}

// gestures classes
class Gestures {
  constructor(name) {
    this.name = name;
  }
}

class Rock extends Gestures {
  constructor(name) {
    super(name);
  }
}

class Paper extends Gestures {
  constructor(name) {
    super(name);
  }
}

class Scissor extends Gestures {
  constructor(name) {
    super(name);
  }
}

class Lizard extends Gestures {
  constructor(name) {
    super(name);
  }
}

class Spock extends Gestures {
  constructor(name) {
    super(name);
  }
}

function promptFor(question, valid) {
  do {
    var response = prompt(question).trim();
  } while (!response || !valid(response));
  return response;
}

function gestureValidation(input) {
  return input.toLowerCase() === "rock" ||
    input.toLowerCase() === "paper" ||
    input.toLowerCase() === "scissor" ||
    input.toLowerCase() === "lizard" ||
    input.toLowerCase() === "spock";
}
