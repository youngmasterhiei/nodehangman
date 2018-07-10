var getData = require("./index.js");

var letter = getData.guessedLetter;



var methods = {
    
    testLetter: function(letter){
    console.log("the user chose " + letter);
    var word = getData.gameWord.selectWord;

    console.log(word);

}
};
exports.data = methods;