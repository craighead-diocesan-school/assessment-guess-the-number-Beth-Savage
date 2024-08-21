let scoreboard = []
function guessTheNumber() {
  //name = prompt asks the user their name and then the next line welcomes them and indroduces the game
  let name = prompt("What is your name?")
  alert("Hello " + name + "! We are going to play a game. I will think of a number from 1 to 20 and you will have to guess it. Take as many turns as you need.")
  //Math.random makes the computer choose a random number for the user to guess. As the range of *20 is 0 - 19 it then adds one on to make it a valid number inside the range.
  let chosenNumber = Math.floor(Math.random() * 20)
  chosenNumber = chosenNumber + 1
  //creates varibles and their values before they are used and sometimes changed in later code
  let usersGuess = 0
  let attempts = 0
  let lowerLimit = 1
  let upperLimit = 20
  //The while loop will repeat the game until the user guesses the number correctly and adds one to the round counter every repeat
  while (usersGuess != chosenNumber) {
    attempts = attempts + 1
    //usersGuess = prompt asks the user their guess then uses .trim() to take away spaces and usersGuess = Number to turn it into a number
    usersGuess = prompt("What number do you think?")
    usersGuess = usersGuess.trim()
    usersGuess = Number(usersGuess)
    //Compares the users guess to the answer and outputs accordingly. If there is an answer outside the range or is not a number it will output an error message.
    if (usersGuess < chosenNumber && usersGuess <= upperLimit && usersGuess >= lowerLimit) {
      alert("Incorrect, too small.")
    } else if (usersGuess > chosenNumber && usersGuess <= upperLimit && usersGuess >= lowerLimit) {
      alert("Incorrect, too big.")
    } else if (usersGuess == chosenNumber) {
      alert("Correct, well done!")
    } else if (usersGuess > upperLimit || usersGuess < lowerLimit) {
      alert("Your number was outside the range. Please try again with a number from 1 to 20")
    } else {
      alert("Something went wrong please try again")
    }
  }
  //scoreboard.push adds onto the scoreboard, the users inputted name and the number of guesses it took for them to guess the number. \n means that when outputted it will be on a new line
  scoreboard.push("\n" + name + ": " + attempts)
}
//The showScoreboard() function shows the scoreboard with an explaination of what the numbers mean when the button connected to it is pressed
function showScoreboard() {
  alert("The Scoreboard: the number beside someone's name is the number of guesses it took them to guess the number." + scoreboard)
}
