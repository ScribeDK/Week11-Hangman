var game = function(){
	//word list
	this.wordList = ["GRIFFIN","PHOENIX","SPHINX","MANTICORE","WYVERN","TRITON","FIREDRAKE","ROC"];
	//returns random word from list
	this.getWord = function(){
		indexNumber = Math.floor(Math.random() * this.wordList.length);
		return this.wordList[indexNumber];
	}	
}

module.exports = game;