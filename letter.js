var getLetter = require("./index.js");

var letter = getLetter.guessedLetter;


var methods = {
    
    testLetter: function(letter){
    console.log("the user chose " + letter);

}
};
exports.data = methods;