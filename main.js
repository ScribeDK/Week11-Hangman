//require inquirer npm package
var inquirer = require('inquirer');
//load required js files 
var letter = require('./letter.js');
var word = require('./word.js');
var game = require('./game.js');

//create new game
var wordGen = new game();

//create new word and generate random word with game
var wordCheck = new word(wordGen.getWord());

//creat new letter and pass word from word
var letterOutput = new letter(wordCheck.word);

//generate number of guesses based on word length
guessCount = Math.ceil(2 + wordCheck.word.length/2);

//create starting output
letterOutput.start();

//run hangman game function
Hangman();

function Hangman(){
	
	//run INQUIRER and ask for user guess
	inquirer.prompt([{
		name: "guess",
		message: "The word is: " + letterOutput.output + "\n you have guessed: " + wordCheck.guessed + "\n You have " + guessCount + " guesses remaining.\n"
	}]).then(function(answers) {
		
		//save guess in uppercase
		var guess = (answers.guess).toUpperCase();
		
		//check guess
		var isCorrect = wordCheck.checkWord(guess);
		
		//if guess is correct update output
		if (isCorrect == true){
			letterOutput.update(guess);
		}
		//if guess is wrong reduce guessCount
		else if (isCorrect == false){
			guessCount = guessCount - 1;
		}
		
		//check if player lost
		if (guessCount == 0){
			console.log("You have lost. The word was: " + wordCheck.word)
		}
		//check if player won
		else if (letterOutput.win() == true){
			console.log("You have won!")
		}
		//else run hangman again
		else{Hangman();}
		
	})
}