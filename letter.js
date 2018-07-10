var getData = require("./index.js");





var methods = {

    testLetter: function (letter) {
        var letter = getData.gameData.userLetter;
        var wordLetters = getData.gameData.wordLetters;
        if (wordLetters.includes(letter)) {
      console.log("hello there")
        }
        else {
            console.log("mrah");
        }
        console.log("the user chose " + letter);
        console.log(wordLetters);
        // var wordLetters = getData.

        // console.log(word);

    }
};
exports.data = methods;