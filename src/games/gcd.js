import { gameFlow } from '../';

const brainGCDGame = () => {
  const gameFunction = () => {
    const numberFirst = Math.floor((Math.random() * 99) + 1);
    const numberSecond = Math.floor((Math.random() * 99) + 1);
    const question = `${numberFirst} ${numberSecond}`;
    const gcdIter = (num1, num2) => {
      if (num1 !== num2) {
        const [min, max] = num1 < num2 ? [num1, num2] : [num2, num1];
        return gcdIter(min, max - min);
      }
      return num1;
    };
    const correctAnswer = gcdIter(numberFirst, numberSecond).toString();
    return { question, correctAnswer };
  };
  gameFunction.description = 'Find the greatest common divisor of given numbers.';
  gameFlow(gameFunction);
};

export default brainGCDGame;
