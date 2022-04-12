
import readlineSync from 'readline-sync';

const max_int = 100;

const randomizer = (max = max_int, min = 0) => {
  const result = Math.round(Math.random() * (max - min));
  return result
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

export { randomizer, getYourAnswer, getCorrectAnswer };