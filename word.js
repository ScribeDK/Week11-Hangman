var word = function(Word){
	this.word = Word;
	this.guessed = [];
	this.checkWord = function(input){

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