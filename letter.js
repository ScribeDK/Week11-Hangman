var letter = function(Word){
	this.word = Word;
	this.letter = [];
	this.output = [];
	this.win = function(){
		var game = true;
		for (i in this.output){
				if (this.output[i] == "_"){
					game = false;
				}
			}
			return game;
	}
	this.start = function(){
		for (i in this.word){
				this.output[i] = "_";
			}
	}
	this.update = function(){
			for(i in this.letter){
				for(e in this.word){
					if (this.letter[i] == this.word[e]){
						this.output[e] = this.word[e];
					}
				}
			}
	}	
}


module.exports = letter;