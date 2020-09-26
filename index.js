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
    this.displayRules();
  }

  runGame() {
    let playerResults = this.buildPlayers();
    console.log("Welcome " + this.playerOne.getName());

    if (playerResults === 2) {
      console.log("Welcome " + this.playerTwo.getName());
    } else if (playerResults === 1) {
      console.log("Welcome " + this.playerTwo.getName());
    }

    //Displaying to the console the gestures of the players
    this.playerOne.callGestures();
    console.log(this.playerOne.getName() + " gesture is: " + this.playerOne.getGesture().getName());
    if (playerResults === 2) {
      this.playerTwo.callGestures();
      console.log(this.playerTwo.getName() + " gesture is: " + this.playerTwo.getGesture().getName());
      this.displayWinner(this.playerOne, this.playerTwo);
    } else if (playerResults === 1) {
      this.playerTwo.callGestures()
      console.log(this.playerTwo.getName() + " gesture is: " + this.playerTwo.getGesture().getName());
    }

  }

  //Building Player vs Player; Player vs AI
  buildPlayers() {
    let numberOfPlayers = prompt("How many players do you have?");
    let playerResults = parseInt(numberOfPlayers);


    if (playerResults === 2) {
      this.playerOne = new Human(prompt("What is the name of Player One?"));
      this.playerTwo = new Human(prompt("What is the name of Player Two?"));
    }
    else if (playerResults === 1) {
      this.playerOne = new Human(prompt("What is the name of Player One?"));
      this.playerTwo = new Ai();
    }
    return playerResults;
  }

  displayRules() {
    console.log("Welcome to a game of Rock, Paper, Scissors, Lizard, and Spock");
    console.log("Best of three is the winner");
  }

  displayWinner(playerOne, playerTwo) {
    if (playerOne.getGesture().getName() === playerTwo.getGesture().getName()) {
      console.log("You tied.");
    } else {
      switch (playerOne.getGesture().getName(), playerTwo.getGesture().getName()) {
        case "rock":
          if (playerTwo.getGesture().getName() === "scissor" ||
            playerTwo.getGesture().getName() === "lizard") {
            this.playerOne.score++;
            console.log("You Win " + this.playerOne.getName());
          } else if (playerTwo.getGesture().getName() === "spock" ||
            playerTwo.getGesture().getName() === "paper") {
            this.playerTwo.score++;
            console.log("You Win " + this.playerTwo.getName());
          }
        case "scissor":
          if (playerTwo.getGesture().getName() === "paper"
            || playerTwo.getGesture().getName() === "lizard") {
            this.playerOne.score++;
            console.log("You Win " + this.playerOne.getName());
          } else if (playerTwo.getGesture().getName() === "spock") {
            this.playerTwo.score++;
            console.log("You Win " + this.playerTwo.getName());
          }
        case "paper":
          if (playerTwo.getGesture().getName() === "rock"
            || playerTwo.getGesture().getName() === "spock") {
            this.playerOne.score++;
            console.log("You Win " + this.playerOne.getName());
          } else if (playerTwo.getGesture().getName() === "scissor" ||
            playerTwo.getGesture().getName() === "lizard") {
            this.playerTwo.score++;
            console.log("You Win " + this.playerTwo.getName());
          }
        case "lizard":
          if (playerTwo.getGesture().getName() === "spock"
            || playerTwo.getGesture().getName() === "paper") {
            this.playerOne.score++;
            console.log("You Win " + this.playerOne.getName());
          } else if (playerTwo.getGesture().getName() === "rock" ||
            playerTwo.getGesture().getName() === "scissor") {
            this.playerTwo.score++;
            console.log("You Win " + this.playerTwo.getName());
          }
        case "spock":
          if (playerTwo.getGesture().getName() === "rock"
            || playerTwo.getGesture().getName() === "scissors") {
            this.playerOne.score++;
            console.log("You Win " + this.playerOne.getName());
          } else if (playerTwo.getGesture().getName() === "rock" ||
            playerTwo.getGesture().getName() === "lizard") {
            this.playerTwo.score++;
            console.log("You Win " + this.playerTwo.getName());
          }
      }
    }
  }

  displayGameOver(playerOne, playerTwo) {
    if (playerOne.score > playerTwo.score) {
      console.log(this.playerOne.getName() + " won!");
    } else if (playerOne.score < playerTwo.score) {
      console.log(this.playerTwo.getName() + " won!");
    }
  }
}

//Player class
class Player {
  constructor() {
    this.score = 0;
    this.name = null;
    this.gesture;
  }

  callGestures() {
    let gestureInput = promptFor("Input your gesture.", gestureValidation).toLowerCase();
    switch (gestureInput) {
      case "rock":
        this.gesture = new Rock(gestureInput);
        break;
      case "scissor":
        this.gesture = new Scissor(gestureInput);
        break;
      case "paper":
        this.gesture = new Paper(gestureInput);
        break;
      case "lizard":
        this.gesture = new Lizard(gestureInput);
        break;
      case "spock":
        this.gesture = new Spock(gestureInput);
        break;
      default:
        break;
    }
  }

  getGesture() {
    return this.gesture;
  }

  getName() {
    return this.name;
  }
}

class Human extends Player {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

class Ai extends Player {
  constructor() {
    let randomName = ["Abe", "Brittney", "Charles", "Davis", "Edward", "Frankie", "Gina", "Hanna"];
    let choosenName = Math.floor(Math.random() * randomName.length) + 1;
    super(randomName[choosenName]);
    this.name = randomName[choosenName];
    this.gesture;
  }

  getGesture() {
    return this.gesture;
  }

  callRandomGesture() {
    this.gesture = callGestures();
    return this.gesture;
  }

  callGestures() {
    this.listOfGestures = ["rock", "paper", "scissor", "lizard", "spock"];
    let gestureResult = Math.floor(Math.random() * this.listOfGestures.length) + 1;

    if (gestureResult === 1) {
      console.log("rock");
      return new Rock("rock");
    } else if (gestureResult === 2) {
      console.log("paper");
      return new Paper("paper");
    } else if (gestureResult === 3) {
      console.log("scissor");
      return new Scissor("scissor");
    } else if (gestureResult === 4) {
      console.log("lizard");
      return new Lizard("lizard");
    } else if (gestureResult === 5) {
      console.log("spock");
      return new Spock("spock");
    }
  }
}

// gestures classes
class Gestures {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
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

//Input validation
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
