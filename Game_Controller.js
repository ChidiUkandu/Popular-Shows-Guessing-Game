Game = function(clues) {
    this.score = 0;
    this.clues = clues; //questions ->clues
    this.clueIndex = 0;  //questionIndex ->clueIndex
 
}
 
Game.prototype.getClueIndex = function() {
    return this.clues[this.clueIndex];
 
}
 
Game.prototype.isEnded = function() {
    return this.clues.length === this.clueIndex;
 
}
 
Game.prototype.guess = function(answer) {
   
    if(this.getClueIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.clueIndex++;
 
}