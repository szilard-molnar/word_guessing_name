// start a new game

// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango"];

// create a var for the number of "_" that are matching the length of the random string from fruitArray
var randomWordLengthArray = [];

for(i = 0; i < fruitArray.length; i++)
{
    randomWordLengthArray[i] = "_";
}

var remainingLetters = fruitArray.length;


// get a random word out of the array and put in console
var randomWord = fruitArray[Math.floor(Math.random() * fruitArray.length)];
console.log(randomWord);
document.write(randomWord);

// have the same word showed only underscores in browser




// check with input if a letter belongs to the random word, if yes, display and push it into usedLetters array. if not, push it into usedLetters array then execute counting down loop.
//var fruitLetter = 

// create a loop for "counting down missed tries", let's give the player 15 opportunities, for loop, i=1, i<15, i++
// make a var/array that stores the "tried" letters
// word display