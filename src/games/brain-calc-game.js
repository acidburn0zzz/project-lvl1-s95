const brainEvenGame = () => {
  const message = 'What is the result of the expression?\n';
  const operators = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b };
  const operandFirst = Math.floor((Math.random() * 99) + 1);
  const operandSecond = Math.floor((Math.random() * 99) + 1);
  const operator = Object.keys(operators)[Math.floor((Math.random() * 3))];
  const question = `${operandFirst} ${operator} ${operandSecond}`;
  const correctAnswer = operators[operator](operandFirst, operandSecond);
  return { message, question, correctAnswer };
};

export default brainEvenGame;
