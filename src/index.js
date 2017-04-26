import readlineSync from 'readline-sync';

export const getName = (descriptionMsg = '') => {
  console.log(`\nWelcome to the Brain Games!\n${descriptionMsg}`);
  const name = readlineSync.question('May I have your name? ');
  return { name, msg: `Hello, ${name}!` };
};

export const brainEven = () => {
  const { name, msg } = getName('Answer "yes" if number even otherwise answer "no".\n');
  console.log(`${msg}\n`);
  const askEven = (tries) => {
    if (tries === 0) {
      return `Congratulations, ${name}!`;
    }
    const num = Math.floor((Math.random() * 99) + 1);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correnct!');
      return askEven(tries - 1);
    }
    return `'${answer}' is wrong answer ;(. Corrent answer was '${num % 2 === 0 ? 'yes' : 'no'}'.\nLet's try again, ${name}!`;
  };
  return askEven(3);
};
