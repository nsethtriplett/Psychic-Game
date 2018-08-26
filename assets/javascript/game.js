$( document ).ready(function() {
    
    alert("Welcome to the Psychic Game! Press ok")


    // set an array and define it using all the letters
    // define the first variable for the guesses: autoGuess
        // we'll use var gamerGuess later within an onclick event function
    // use math.floor to randomize the computer's guess
    // console.log each variable

    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var autoGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(alphabet);
    console.log(autoGuess);

    // then define the other three variables:
        // wins, losses, and guessesLeft
            //set wins and losses to 0
            //set guessesLeft to 7

    var wins = 0;
    var losses = 0;
    var guessesLeft = 7;

    console.log(wins)
    console.log(losses)
    console.log(guessesLeft)



    // now use document.onkeypress and define playerGuess within that function

    document.onkeypress = function(event) {
        var playerGuess = event.key;

        console.log(playerGuess);

        
        // use .innerhtml and the getElementById function to display the wins...
        //...losses and guesses left

        // I seem to have done something wrong with the code directly below
        // I can't seem to figure out why it wont display 

        document.getElementById('wins').innerHTML = "wins: " + wins; 
        document.getElementsById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses-left').innerHTML = "guesses left: " + guesses;

        // use if/else statements ensuring that the user must guess the right...
        // ...letter to win or loses a guess if the guess is wrong
        // setting the playerGuess exactly equal (using "===") to autoGuess is very important
        // use ++ to add value of 1 and -- to subtract value of 1

        if(playerGuess === autoGuess){
            wins++;
        }
        
        else {
            guesses--;
            losses++
        }

        // if player has run out of guesses, reset the game

        if(guesses === 0) {
            losses++
            alert("You have lost! :(");
            reset();
        }

        // if the player gets three guesses right, the game is won

        if(wins === 3) {
            alert("You just won!");
            reset();
        }

    };
});





    
    



