
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [];
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
	
	
	document.onkeyup = function(event) {
		
		//determines which key was pressed.
		var userGuess = event.key;
		// randomly chooses a choice from the options array. This is the Computer's guess.
		function computerGuess(computerChoices) {
			 return computerChoices[Math.floor(Math.random() * computerChoices.length)];
		}
		console.log(computerGuess(computerChoices))

		//Pushes userGuess to wongGuesses array.
		var addGuess = function() {
		wrongGuesses.push(
			userGuess
			)
		};	

		//Resets the game.
		var resetGame = function() {
				guessesLeft = 10;
				wrongGuesses = [];
				computerGuess(computerChoices);
		};

		//Determines winning and losing and what happens
		if (userGuess === computerGuess(computerChoices)) {
			alert("You got it! You're out of this world!")
			wins++;
			resetGame(); 
		} else {
			guessesLeft--;
			addGuess();
			if (guessesLeft === 0) {
				alert("Disappointing. Try again and prove me wrong.");
				losses++;
				resetGame();
			}
		};

		var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + wrongGuesses + "</p>";

        document.querySelector("#game").innerHTML = html;

	};
