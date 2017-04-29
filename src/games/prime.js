import gameFlow from '../';

const description = 'Answer "yes" if number is prime otherwise answer "no".';
const minDivisor = 7;

const primeIter = (number, divisor, maxPossibledivisor) => {
  if (divisor >= maxPossibledivisor) {
    return 'yes';
  }
  if (
    (number % divisor) *
    (number % (divisor + 4)) *
    (number % (divisor + 6)) *
    (number % (divisor + 10)) *
    (number % (divisor + 12)) *
    (number % (divisor + 16)) *
    (number % (divisor + 22)) *
    (number % (divisor + 24)) === 0) {
    return 'no';
  }
  return primeIter(number, divisor + 30, maxPossibledivisor);
};

const genQuestionAndSolution = () => {
  const number = Math.floor((Math.random() * 98) + 3);
  if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
    return { question: number, correctAnswer: 'no' };
  }
  const correctAnswer = primeIter(number, minDivisor, Math.floor(Math.sqrt(number)));
  return { question: number, correctAnswer };
};

const brainPrimeGame = () => gameFlow(description, genQuestionAndSolution);

export default brainPrimeGame;
