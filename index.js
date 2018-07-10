var getWord = require("./word.js");
var letter = require("./letter.js");

var prompt = require('prompt');









var randomWords = getWord.wordArray;

console.log(randomWords.wordChoices);
var selectWord = randomWords.wordChoices[Math.floor(Math.random() * randomWords.wordChoices.length)];



console.log( " random word from array is " + selectWord);

exports.gameWord = {
    selectWord: selectWord
};

prompt.start();

prompt.get(['letter'], function (err, result) {
    //
    // Log the results.
    //

    var userLetter = result.letter;
    exports.guessedLetter = {
        userLetter: userLetter
    };
    console.log('Command-line input received:');
    console.log('  letter: ' + result.letter);
    letter.data.testLetter(result.letter);
  });

