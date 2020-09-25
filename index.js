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
      console.log("Welcome " + this.playerAi.getName());
    }

    //Calling the game to run the gestures of the players
    this.playerOne.callGestures();
    console.log(this.playerOne.getName() + " gesture is: " + this.playerOne.getGesture().getName());

    if (playerResults === 2) {
      this.playerTwo.callGestures();
      console.log(this.playerTwo.getName() + " gesture is: " + this.playerTwo.getGesture().getName());
    } else if (playerResults === 1) {
      this.playerAi.callAiGestures()
      console.log(this.playerAi.getName() + " gesture is: " + this.playerAi.getGesture().getName());
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
      this.playerAi = new Ai();
    }
    return playerResults;
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
    this.gesture = callAiGestures();
    return this.gesture;
  }

  callAiGestures() {
    let listOfGestures = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];

    let gestureResult = Math.floor(Math.random() * listOfGestures.length) + 1;

    if (gestureResult === 1) {
      console.log("rock");
      return gestureResult;
    } else if (gestureResult === 2) {
      console.log('paper');
      return gestureResult;
    } else if (gestureResult === 3) {
      console.log('scissor');
      return gestureResult;
    } else if (gestureResult === 4) {
      console.log('lizard');
      return gestureResult;
    } else if (gestureResult === 5) {
      console.log('spock');
      return gestureResult;
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
