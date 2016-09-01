//require inquirer npm package
var inquirer = require('inquirer');
//load required js files 
var letter = require('./letter.js');
var word = require('./word.js');
var game = require('./game.js');


var wordGen = new game();

var wordCheck = new word(wordGen.getWord());

var letterOutput = new letter(wordCheck.word);

guessCount = Math.ceil(2 + wordCheck.word.length/2);

letterOutput.start();

Hangman();

function Hangman(){
	
	//run INQUIRER and ask for user guess
	inquirer.prompt([{
		name: "guess",
		message: "The word is: " + letterOutput.output + "\n you have guessed: " + wordCheck.guessed + "\n You have " + guessCount + " guesses remaining.\n"
	}]).then(function(answers) {

		var guess = (answers.guess).toUpperCase();

		var isCorrect = wordCheck.checkWord(guess);
		
		if (isCorrect == true){
			letterOutput.update(guess);
		}
		else if (isCorrect == false){
			guessCount = guessCount - 1;
		}
		
		var gameWin = letterOutput.win();
		
		if (guessCount == 0){
			console.log("You have lost.")
		}
		else if (gameWin == true){
			console.log("You have won!")
		}
		else{Hangman();}
		
	})
}