import { gameFlow } from '../';

const brainBalanceGame = () => {
  const gameFunction = () => {
    const number = `${Math.floor((Math.random() * 9999) + 1)}`;
    const question = number;
    const summOfDigits = [...number].reduce((acc, digit) => acc + Number(digit), 0);
    const numberAverageDigit = summOfDigits / number.length;
    if (summOfDigits % number.length === 0) {
      const correctAnswer = new Array(number.length + 1).join(`${numberAverageDigit}`);
      return { question, correctAnswer };
    }
    const approximationIter = (balancedNumber, digitsLeft) => {
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
      return approximationIter(`${balancedNumber}${nextDigit}`, digitsLeft - 1);
    };
    const correctAnswer = approximationIter('', number.length, numberAverageDigit);
    return { question, correctAnswer };
  };
  gameFunction.description = 'Balance the given number.';
  gameFlow(gameFunction);
};

export default brainBalanceGame;
