var word = require("./index.js");
var cheerio = require('cheerio');



var wordLetters = [];

var randomWord = "";



console.log(randomWord);

var methods = {

CreateHiddenWord: function(newWord){
     randomWord = word.turnToArray.selectedWord;

    wordLetters = newWord.split('').join(' ');
    exports.splitWord = {
        wordLetters: wordLetters
    };
}
};

exports.data = methods;
// CreateHiddenWord(randomWord);
// console.log(wordLetters);