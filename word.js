var word = function(Word){
	//save chosen word
	this.word = Word;
	//save all guessed letters
	this.guessed = [];
	//array of excepable inputs
	this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	//check if guess is excepable and if it is in the chosen word or not
	this.checkWord = function(input){
		
		var check = false;
		for (i in this.letters){
			if (input == this.letters[i]){
				check = true;
			}
		}
		if (check == false){
			return null;
		}
		
		for (i in this.guessed){
			if (this.guessed[i] == input){
				return null;
			}
		}

		this.guessed.push(input);

		for (i in this.word){
			if (this.word[i] == input){
				return true;
			}
		}
		return false;
	}	
}


module.exports = word;