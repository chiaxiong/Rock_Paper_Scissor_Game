"use strict"

// 1. prompt user for valid result(i.e. rock, paper, scissor)
// 2. create an array to store value of rock, paper, scisssor
// 3. display which player won the round
// 4. display winner best of three
// 5. want human vs AI and human vs human


class Game {
    constructor() {
        this.playerOne = new Player(prompt("What is the name of Player One?"));
        this.playerTwo = new Player(prompt("What is the name of Player Two?"));

    }
}

class Player {
    constructor() {
        this.score = 0;
        this.name = null;

        this.gestures = [new Gestures("rock"), new Gestures("paper"), new Gestures("scissor")];
    }
}

class Human extends Player {
    constructor(name) {
        super(name);
    }
}

class Ai extends Player {
    constructor(name) {
        super(name);
    }

}

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

class Paper extends Gesture {
    constructor(name) {
        super(name);
    }
}

class Scissor extends Gesture {
    constructor(name) {
        super(name);
    }
}

// use inheritance for different gestures













function promptFor(question, valid) {
    do {
        var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
}