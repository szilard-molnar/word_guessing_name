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


// initialize game
function startGame() {
    underscoreArray = [];
    $( "#guessedLetters" ).empty();
    remainingGuesses = 10;
    completeWord = false;
    $( "#standingTree" ).css("visibility", "hidden");
    $("#standingTreeTop").css("visibility", "hidden");
    $("#rope").css("visibility", "hidden");
    $("#head").css("visibility", "hidden");
    $("#body").css("visibility", "hidden");
    $("#left-arm").css("visibility", "hidden");
    $("#right-arm").css("visibility", "hidden");
    $("#left-leg").css("visibility", "hidden");
    $("#right-leg").css("visibility", "hidden");


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
    drawMan();
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

// function gets called when the player loses
function ifYouLose() {
    if(remainingGuesses === 0)
    {
        losses++;      
        alert("You lost!!!");
        $("#losediv").html("losses: " + losses);
        return;
    }
}

// function gets called when the player wins
function ifYouWin() {
    if(underscoreArray.indexOf("_") === -1) 
    {
        wins++;
        alert("You win!");
        $("#windiv").html("wins: " + wins);
        return;
    }
}

// function gets called when there is a missed guess and the hangman figure gets built up.
function drawMan() {
    if(remainingGuesses === 10)
    {
        $("#standingTree").css("visibility", "visible");
    }
    else if(remainingGuesses === 9)
    {
        $("#standingTreeTop").css("visibility", "visible");
    }
    else if(remainingGuesses === 8)
    {
        $("#rope").css("visibility", "visible");
    }
    else if(remainingGuesses === 7)
    {
        $("#head").css("visibility", "visible");
    }
    else if(remainingGuesses === 6)
    {
        $("#body").css("visibility", "visible");
    }
    else if(remainingGuesses === 5)
    {
        $("#left-arm").css("visibility", "visible");
    }
    else if(remainingGuesses === 4)
    {
        $("#right-arm").css("visibility", "visible");
    }
    else if(remainingGuesses === 3)
    {
        $("#left-leg").css("visibility", "visible");
    }
    else if(remainingGuesses === 2)
    {
        $("#right-leg").css("visibility", "visible");
    }
}

// eventlistener that calls checkInput function when any key is pressed
document.addEventListener("keydown", checkInput);


// function that gets called when restart button gets called.
$("#restart-button").click(function(){
    letters.length = 0;
    startGame();
});

startGame();
})
