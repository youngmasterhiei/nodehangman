var getData = require("./index.js");





var methods = {

    testLetter: function (letter) {
        var letter = getData.gameData.userLetter;
        var wordLetters = getData.gameData.wordLetters;
        var hiddenWord = getData.gameData.hiddenWord;
        console.log("the user chose " + letter);
        console.log(hiddenWord);

        if (wordLetters.includes(letter)) {

         
        //    console.log(hiddenWord.replaceAt(index, letter));
            
            // wordLetters.findIndex(letter);
      console.log("you found a letter");

        }
        else {
            console.log("wrong guess");
        }
     
        // var wordLetters = getData.

        // console.log(word);

    }
};
// String.prototype.replaceAt = function (index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// };
exports.data = methods;