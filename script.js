function guessTheNumber() {
  let name = prompt("What is your name?")
  alert("Hello " + name + "! We are going to play a game. I will think of a number from 1 to 20 and you will have to guess it. Take as many turns as you need.")
  let chosenNumber = Math.floor(Math.random() * 20)
  chosenNumber = chosenNumber + 1
  let usersGuess = 0
  let attempts = 0
  alert(chosenNumber)
  while (usersGuess != chosenNumber) {
    attempts = attempts + 1
    usersGuess = prompt("What number do you think?")
    usersGuess = usersGuess.trim()
    usersGuess = Number(usersGuess)
    if (usersGuess < chosenNumber) {
      alert("Incorrect, too small.")
    } else if (usersGuess > chosenNumber) {
      alert("Incorrect, too big.")
    } else if (usersGuess == chosenNumber) {
      alert("Correct, well done!")
    }
  }
}
