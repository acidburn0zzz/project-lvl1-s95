import gameFlow from '../';

const description = 'What is the result of the expression?';

const genQuestionAndSolution = () => {
  const operators = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b };
  const operandFirst = Math.floor((Math.random() * 99) + 1);
  const operandSecond = Math.floor((Math.random() * 99) + 1);
  const operator = Object.keys(operators)[Math.floor((Math.random() * 3))];
  const question = `${operandFirst} ${operator} ${operandSecond}`;
  const correctAnswer = operators[operator](operandFirst, operandSecond).toString();
  return { question, correctAnswer };
};

const brainCalcGame = () => gameFlow(description, genQuestionAndSolution);

export default brainCalcGame;
