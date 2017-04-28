import readlineSync from 'readline-sync';

const numberOfRightAnswersToWin = 3;

const gameFlow = (description, genQuestionAndSolution) => {
  console.log(`\nWelcome to the Brain Games!\n${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const gameIter = (rightAnswersToWinLeft) => {
    if (rightAnswersToWinLeft === 0) {
      return `Congratulations, ${playerName}!`;
    }
    const { question, correctAnswer } = genQuestionAndSolution();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return gameIter(rightAnswersToWinLeft - 1);
    }
    return `'${playerAnswer}' is wrong answer ;(. Corrent answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
  };
  console.log(gameIter(numberOfRightAnswersToWin));
};

export default gameFlow;
