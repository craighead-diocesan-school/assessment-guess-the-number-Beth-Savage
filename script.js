function guessTheNumber() {
  let name = prompt("What is your name?")
  alert("Hello " + name + "! We are going to play a game. I will think of a number from 1 to 20 and you will have to guess it. Take as many turns as you need.")
  let chosenNumber = Math.floor(Math.random() * 19)
  chosenNumber = chosenNumber + 1
  let usersGuess = 0
  let attemps = 0
  while (usersGuess != chosenNumber) {
    attemps = attemps + 1
    usersGuess = prompt("What number do you think?")
    usersGuess = Number(usersGuess)
    if (usersGuess != chosenNumber) {
      alert("Incorrect, try again.")
    } else if (usersGuess == chosenNumber) {
      alert("Correct, well done!")
    }
  }
}
