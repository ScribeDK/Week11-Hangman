var game = function(){
	this.wordList = ["GRIFFIN","PHOENIX","SPHINX","MANTICORE","WYVERN","TRITON","FIREDRAKE","ROC"];
	this.getWord = function(){
		indexNumber = Math.floor(Math.random() * this.wordList.length);
		return this.wordList[indexNumber];
	}	
}

module.exports = game;