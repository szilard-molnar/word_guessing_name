// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango", "grapefruit", "jackfruit", "chestnut"];

let underscoreArray;
let letters;
let remainingGuesses;
let wins = 0;
let losses = 0;
let completeWord;
let randomFruit;
let wordSplit;

function startGame() {
    underscoreArray = [];
    letters = [];
    remainingGuesses = 3;
    completeWord = false;

// random fruit from fruitArray
    randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
    console.log(randomFruit);

// split the random word into individual letters and put into wordSplit array
    wordSplit = randomFruit.split('');
    console.log(wordSplit);

    $("#remaining").html(remainingGuesses);

strReplace();
}
// generate a loop the replaces the letters with underscores
function strReplace(){
    let underscoreString = "";
    for(let i = 0; i < wordSplit.length; i++)
    {
        underscoreString += wordSplit[i].replace(/[a-zA-Z]/gi, "_");
        console.log(underscoreString);
    }
    document.getElementById("underscores").innerHTML = underscoreString;
}

// check if input is a letter or not
function checkInput() {
    console.log(event.key);

if(remainingGuesses > 0)
{
    for(let i = 0; i < letters.length; i++)
    {
        if(event.key === letters[i])
        {
            alert("You already guessed this letter!!!!");
        }
    }

    if (event.keyCode < 65 || event.keyCode > 90)
    {
        alert("Please guess a letter!!!");
    }

    else if(!wordSplit.includes(event.key))
    {
        remainingGuesses--;
        $("#remaining").html(remainingGuesses);
    }

    else if(event.keyCode >= 65 && event.keyCode <= 90 && !letters.includes(event.key) )
    {
        letters.push(event.key);
        console.log("thank you for guessing a letter!!!");
        $("#guessedLetters").html(letters);
    }

    if(remainingGuesses === 0)
    {
        alert("GAMEOVER");
        losses++;
        $("#losses").html(losses);
        return;
    }
}
}


document.addEventListener("keydown", checkInput);

$("#restart-button").click(function(){
    startGame();
});

startGame();
})
