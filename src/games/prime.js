import gameFlow from '../';

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (number, currentDivisor, maxPossibledivisor) => {
  if (currentDivisor >= maxPossibledivisor) {
    return true;
  }
  if (number % currentDivisor === 0) {
    return false;
  }
  return isPrime(number, currentDivisor + 1, maxPossibledivisor);
};

const genQuestionAndSolution = () => {
  const number = Math.floor((Math.random() * 98) + 3);
  const minPossibleDivisor = 2;
  const maxPossibleDivisor = Math.floor(Math.sqrt(number));
  const correctAnswer = isPrime(number, minPossibleDivisor, maxPossibleDivisor) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

const brainPrimeGame = () => gameFlow(description, genQuestionAndSolution);

export default brainPrimeGame;
