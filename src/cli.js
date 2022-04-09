import readlineSync from 'readline-sync';

const getAnswer = (question) => readlineSync.question(question);

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export { getAnswer, greet };