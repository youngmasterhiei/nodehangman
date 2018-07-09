var letter = require("./letter.js");

var wordChoices = [];
var word = function(newWord){
    this.newWord = newWord;
    wordChoices.push(newWord);
    

};

var choice1 = word("jurrasic");
var choice2 = word("cryptocurrency");
var choice3 = word("function");
var choice4 = word("bananas");
var choice5 = word("stackoverflow");
var choice6 = word("javascript");

exports.wordArray = {
    wordChoices: wordChoices
};