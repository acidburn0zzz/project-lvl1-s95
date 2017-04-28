import gameFlow from '../';

const description = 'Find the greatest common divisor of given numbers.';

const gcdIter = (num1, num2) => {
  if (num1 !== num2) {
    const [min, max] = num1 < num2 ? [num1, num2] : [num2, num1];
    return gcdIter(min, max - min);
  }
  return num1;
};

const genQuestionAndSolution = () => {
  const numberFirst = Math.floor((Math.random() * 99) + 1);
  const numberSecond = Math.floor((Math.random() * 99) + 1);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = gcdIter(numberFirst, numberSecond).toString();
  return { question, correctAnswer };
};

const brainGCDGame = () => gameFlow(description, genQuestionAndSolution);

export default brainGCDGame;
