import inquirer from "inquirer";
const randomNumGenrator=():number=>{
    return Math.floor(Math.random() * 2)+1;
}


let score = 0;
let round = 1;
while (round <= 3) {
    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "number",
        message: "Guess the number :",
        validate: function (value: string) {
          if (isNaN(Number(value))) {
            return "Please enter a number";
          }
          return true;
        },
      },
    ]);
  console.log("Round", round);
  const randomNumber = randomNumGenrator();
  let guessedNumber = +questions.number;
  if (randomNumber === guessedNumber) {
    console.log("You guessed it right, Number was : ", randomNumber);
    score ++;
  } else {
    console.log("You guessed it wrong, Number was : ", randomNumber);
  }
  round++;
}
console.log("Your score is : ", score)