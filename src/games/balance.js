import { gameFlow } from '../';

const brainBalanceGame = () => {
  const gameFunction = () => {
    const number = `${Math.floor((Math.random() * 9999) + 1)}`;
    const question = number;
    const numberOfDigits = number.length;
    const sumOfDigits = [...number].reduce((acc, digit) => acc + Number(digit), 0);
    const numberAverageDigit = sumOfDigits / numberOfDigits;
    if (sumOfDigits % numberOfDigits === 0) {
      const correctAnswer = new Array(numberOfDigits + 1).join(`${numberAverageDigit}`);
      return { question, correctAnswer };
    }
    const approximationIter = (digitsLeft, balancedNumber = '') => {
      if (digitsLeft === 0) {
        return [...balancedNumber].sort().join('');
      }
      const currentAverage = balancedNumber === '' ?
          0 :
          [...balancedNumber]
              .reduce((acc, digit) => acc + Number(digit), 0) / balancedNumber.length;
      const nextDigit = currentAverage < numberAverageDigit ?
          Math.floor(numberAverageDigit) + 1 :
          Math.floor(numberAverageDigit);
      return approximationIter(digitsLeft - 1, `${balancedNumber}${nextDigit}`);
    };
    const correctAnswer = approximationIter(numberOfDigits);
    return { question, correctAnswer };
  };
  gameFunction.description = 'Balance the given number.';
  gameFlow(gameFunction);
};

export default brainBalanceGame;
