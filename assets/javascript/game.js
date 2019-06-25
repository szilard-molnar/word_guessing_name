// start a new game

// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango"];

// get a random word out of the array and put in console
var fruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
console.log(fruit);

// have the same word showed only underscores in browser
var wordLength = fruit.length;
var underscores = ""
for (var i = 0; i < fruit.length; i++) {
    underscores = underscores + "_";
    document.write(underscores);
}

// create a loop for "counting down missed tries", let's give the player 15 opportunities, for loop, i=1, i<15, i++
// make a var/array that stores the "tried" letters
// word display