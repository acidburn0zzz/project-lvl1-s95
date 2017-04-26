import readlineSync from 'readline-sync';
import brainEvenGame from './games/brain-even-game';
import brainCalcGame from './games/brain-calc-game';

export const getName = (descriptionMsg = '') => {
  console.log(`\nWelcome to the Brain Games!\n${descriptionMsg}`);
  const name = readlineSync.question('May I have your name? ');
  return { name, msg: `Hello, ${name}!\n` };
};

const gameFlow = (gameFunction) => {
  const { message } = gameFunction();
  const { name, msg } = getName(message);
  console.log(msg);
  const gameIter = (tries) => {
    if (tries === 0) {
      return `Congratulations, ${name}!`;
    }
    const { question, correctAnswer } = gameFunction();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      return gameIter(tries - 1);
    }
    return `'${playerAnswer}' is wrong answer ;(. Corrent answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
  };
  return gameIter(3);
};


export const brainEven = () => gameFlow(brainEvenGame);

export const brainCalc = () => gameFlow(brainCalcGame);

