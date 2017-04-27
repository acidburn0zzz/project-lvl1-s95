import readlineSync from 'readline-sync';
import brainHelloGame from './games/brain-hello-game';
import brainEvenGame from './games/brain-even-game';
import brainCalcGame from './games/brain-calc-game';

export const gameFlow = (gameFunction) => {
  const { rules } = gameFunction();
  const formattedRules = rules !== '' ? `${rules}\n` : rules;
  console.log(`\nWelcome to the Brain Games!\n${formattedRules}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  if (rules !== '') {
    const numberOfRightAnswersToWin = 3;
    const gameIter = (rightAnswersToWinLeft) => {
      if (rightAnswersToWinLeft === 0) {
        return `Congratulations, ${playerName}!`;
      }
      const { question, correctAnswer } = gameFunction();
      console.log(`Question: ${question}`);
      const playerAnswer = readlineSync.question('Your answer: ');
      if (playerAnswer === correctAnswer.toString()) {
        console.log('Correct!');
        return gameIter(rightAnswersToWinLeft - 1);
      }
      return `'${playerAnswer}' is wrong answer ;(. Corrent answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
    };
    console.log(gameIter(numberOfRightAnswersToWin));
  }
};

export { brainHelloGame, brainEvenGame, brainCalcGame };

