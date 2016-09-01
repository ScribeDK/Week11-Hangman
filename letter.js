var letter = function(Word){
	//save chosen word
	this.word = Word;
	//save output to user
	this.output = [];
	//check if player has won
	this.win = function(){
		var game = true;
		for (i in this.output){
				if (this.output[i] == "_"){
					game = false;
				}
			}
			return game;
	}
	//gernerate blanks in output
	this.start = function(){
		for (i in this.word){
				this.output[i] = "_";
			}
	}
	//add correctly guessed letters to output
	this.update = function(update){
				for(e in this.word){
					if (update == this.word[e]){
						this.output[e] = this.word[e];
					}
				}
	}	
}


module.exports = letter;