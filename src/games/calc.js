import { gameFlow } from '../';

const brainCalcGame = () => {
  const gameFunction = () => {
    const operators = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b };
    const operandFirst = Math.floor((Math.random() * 99) + 1);
    const operandSecond = Math.floor((Math.random() * 99) + 1);
    const operator = Object.keys(operators)[Math.floor((Math.random() * 3))];
    const question = `${operandFirst} ${operator} ${operandSecond}`;
    const correctAnswer = operators[operator](operandFirst, operandSecond).toString();
    return { question, correctAnswer };
  };
  gameFunction.description = 'What is the result of the expression?';
  gameFlow(gameFunction);
};

export default brainCalcGame;
