// The const variable will store the answer while the guess variable stores the user's guess.
const age = 16
let guess = 0

// Connects the button to its function.
document.getElementById('start').addEventListener('click', game)

function game () {
// While the statement below is true, keep repeating the commands below it until that statement is false, then continue to the next function.
  while (guess !== age) {
// The prompt will open an alert with a text box and a piece of text which will say "Guess my age".
    guess = prompt('Guess my age!')
// parseInt takes user input and uses it as an integer as opposed to a character.
    guess = parseInt(guess)
// If the age is greater than the user's guess, or if the user's guess was too small, then display the text below.
    if (age > guess) {
      alert('Your guess is incorrect. Try guessing a bigger number.')
// Otherwise, if the age is less than the guess, or if the user guessed too big, then display the text below.
    }   else if (age < guess) {
      alert('Your guess is incorrect. Try guessing a smaller number.')
    }
// This is where the loop ends. When the statement at the top becomes false, in other words, when the guess equals the age and the user gets the answer right, then don't read the loop commands anymore and carry down to the next line of code below it.
  }
// Once the loop is broken, display this text when the user guesses correctly and the guess equals the answer.
  alert('You did it! You got it right! YOU WIN!')
  document.getElementById('reveal').innerHTML = 'CONGRATULATIONS!'
}
