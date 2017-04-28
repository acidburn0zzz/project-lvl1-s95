import gameFlow from '../';

const description = 'Balance the given number.';

const approximationIter = (digitsLeft, approximationAverage, balancedNumber = '') => {
  if (digitsLeft === 0) {
    return [...balancedNumber].sort().join('');
  }
  const currentAverage = balancedNumber === '' ?
      0 :
      [...balancedNumber]
          .reduce((acc, digit) => acc + Number(digit), 0) / balancedNumber.length;
  const nextDigit = currentAverage < approximationAverage ?
      Math.floor(approximationAverage) + 1 :
      Math.floor(approximationAverage);
  return approximationIter(digitsLeft - 1, approximationAverage, `${balancedNumber}${nextDigit}`);
};

const genQuestionAndSolution = () => {
  const number = `${Math.floor((Math.random() * 9999) + 1)}`;
  const question = number;
  const numberOfDigits = number.length;
  const sumOfDigits = [...number].reduce((acc, digit) => acc + Number(digit), 0);
  const numberAverageDigit = sumOfDigits / numberOfDigits;
  if (sumOfDigits % numberOfDigits === 0) {
    const correctAnswer = new Array(numberOfDigits + 1).join(`${numberAverageDigit}`);
    return { question, correctAnswer };
  }
  const correctAnswer = approximationIter(numberOfDigits, numberAverageDigit);
  return { question, correctAnswer };
};

const brainBalanceGame = () => gameFlow(description, genQuestionAndSolution);

export default brainBalanceGame;
