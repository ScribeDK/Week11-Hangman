var word = function(Word){
	this.word = Word;
	this.guessed = [];
	this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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