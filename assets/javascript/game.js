// start a new game
$(document).ready(function() {
// create an array of words, theme is fruits
var fruitArray = ["apple", "banana", "grapes", "orange", "lemon", "lime", "avocado", "almond", "pear", "strawberry", "raspberry", "cherry", "dragonfruit", "coconut", "mango", "grapefruit", "jackfruit", "chestnut"];

let underscoreArray;
let letters = [];
let remainingGuesses;
let wins = 0;
let losses = 0;
let completeWord;
let randomFruit;
let wordSplit;

function startGame() {
    underscoreArray = [];
    letters = [];
    remainingGuesses = 10;
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
// function to replace letters with "_"
function strReplace(){
    for(let i = 0; i < wordSplit.length; i++)
    {
        underscoreArray.push(wordSplit[i].replace(/[a-zA-Z]/gi, "_"));
        console.log(underscoreArray);
    }
    document.getElementById("underscores").innerHTML = underscoreArray;
}

// check if the input is in the word or not. if yes, reveal letter. if not, reduce remaining guesses by 1.

function checkInput() {
    //console.log("this is the" + underscoreArray);
    if(remainingGuesses > 0)
    {  
        if(event.which < 65 || event.which > 90)
        {
            alert("Please guess a letter!!!");
            return;
        } 
        else if(event.which >= 65 && event.which <= 90)
        {
        letters.push(event.key);
        $("#guessedLetters").append(event.key + ", ");
        }

        for(let i = 0; i < wordSplit.length; i++)
        {
            if(event.key === wordSplit[i])
            {
                underscoreArray[i] = event.key;
                underscoreArray[i] = underscoreArray[i].toLowerCase();     
                document.getElementById("underscores").innerHTML = underscoreArray.join("");
                ifYouWin();    
            }
        
        }
        if(!wordSplit.includes(event.key))
        {
            remainingGuesses--;
            ifYouLose();
        }
        $("#remaining").html(remainingGuesses);
    }
}

function ifYouLose() {
    if(remainingGuesses === 0)
    {
        losses++;      
        alert("You lost!!!");
        $("#losses").html(losses);
        return;
    }
}

function ifYouWin() {
    if(underscoreArray.indexOf("_") === -1) 
    {
    wins++;
    alert("You win!");
    $("#wins").html(wins);
    return;
    }
}

document.addEventListener("keydown", checkInput);

$("#restart-button").click(function(){
    startGame();
});

startGame();
})
