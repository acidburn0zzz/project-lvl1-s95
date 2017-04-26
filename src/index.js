import readlineSync from 'readline-sync';

export getName = () => {
  console.log('\nWelcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('\n');
  const askEven = (tries) => {
    if (tries === 0) {
      return `Congratulations, ${name}!`;
    }
    const num = Math.floor(Math.random() * 99 + 1);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correnct!');
      return askEven(tries - 1);
    }
    return `'${answer}' is wrong answer ;(. Corrent answer was '${num % 2 === 0 ? 'yes' : 'no'}'.\nLet's try again, ${name}`;
  }
  askEven(3);
};
