import readlineSync from 'readline-sync';
import { greet, getName } from '../src/cli.js';

const [result, name] = greet();

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomizer = () => {
  const a = Math.random() * 100;
  const result = Math.round(a);
  return result;
};

const getYourAnswer = () => {
  const value = readlineSync.question('Your answer: ');
  return value;
};

const getCorrectAnswer = (resultOfRandomizer) => {
  let result = '';
  if (resultOfRandomizer % 2 === 0) {
    result = 'yes';
    return result
  };
  if (resultOfRandomizer % 2 !== 0) {
    result = 'no';
    return result;
  }
};

const isAnswerCorrect = (answer, resultOfCorrectAnswer) => {
  if (answer === resultOfCorrectAnswer) {
    console.log('Correct!');
  }
  if (answer !== resultOfCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultOfCorrectAnswer}'.`);
  }
}

const isEvenGame = () => {
  console.log(gameRules);
  const resultOfRandomizer = randomizer();
  console.log(`Question: ${resultOfRandomizer}`);
  const answer = getYourAnswer();
  const resultOfCorrectAnswer = getCorrectAnswer(resultOfRandomizer);
  isAnswerCorrect(answer, resultOfCorrectAnswer);
};
let i = 0;
 while (i < 3) {
  isEvenGame();
  i+=1;
 };
 console.log(`Congratulations, ${name}`)
 
