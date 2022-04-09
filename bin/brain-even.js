import readlineSync from 'readline-sync';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomizer = () => {
  const a = Math.random() * 100;
  const result = Math.round(a);
  return result;
};

const yourAnswer = () => {
  const value = readlineSync.question('Your answer: ');
  return value;
}

const correctAnswer = (resultOfRandomizer) => {
  if (resultOfRandomizer % 2 === 0) {
    return 'yes';
  };
  if (resultOfRandomizer % 2 !== 0) {
    return 'no';
  };
};

const isAnswerCorrect = (answer, resultOfCorrectAnswer) => {
  let result = '';
  if (answer === resultOfCorrectAnswer) {
    result = 'Correct!';
    console.log(result);
  };
  if (answer !== resultOfCorrectAnswer) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${resultOfCorrectAnswer}'.`;
    console.log(result);
  };
}

const isEvenGame = () => {
  console.log(gameRules);
  const resultOfRandomizer = (randomizer());
  console.log(`Question: ${resultOfRandomizer}`);
  const answer = yourAnswer();
  const resultOfCorrectAnswer = correctAnswer();
  console.log(resultOfCorrectAnswer);
  isAnswerCorrect();
};

isEvenGame();
