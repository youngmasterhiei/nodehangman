var getWord = require("./word.js");
var letter = require("./letter.js");

var prompt = require('prompt');

var wordChoices = [];
var hiddenWord = [];
var Word = function(newWord){
    this.newWord = newWord;
    wordChoices.push(newWord);
    

};


var choice1 = Word("jurrasic");
var choice2 = Word("cryptocurrency");
var choice3 = Word("function");
var choice4 = Word("bananas");
var choice5 = Word("stackoverflow");
var choice6 = Word("javascript");



// exports.wordArray = {
//     wordChoices: wordChoices
// };


console.log(wordChoices);
var selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];



console.log( " random word from array is " + selectedWord);

exports.turnToArray = {
    selectedWord: selectedWord
};


getWord.data.CreateHiddenWord(selectedWord);
var wordLetters = getWord.splitWord.wordLetters;
console.log(wordLetters);
// var hiddenWord = wordLetters;
for(var i = 0; i<wordLetters.length; i++){
hiddenWord += "#";



}
console.log(hiddenWord);

prompt.start();

prompt.get(['letter'], function (err, result) {
    //
    // Log the results.
    //

    var userLetter = result.letter;
    exports.gameData = {
        userLetter: userLetter,
        wordLetters: wordLetters,
        hiddenWord: hiddenWord
    };
    console.log('Command-line input received:');
    console.log('  letter: ' + result.letter);
    letter.data.testLetter(result.letter);
  });

