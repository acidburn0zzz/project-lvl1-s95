import { gameFlow } from '../';

const brainEvenGame = () => {
  const gameFunction = () => {
    const rules = 'Answer "yes" if number even otherwise answer "no".';
    const question = Math.floor((Math.random() * 99) + 1);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { rules, question, correctAnswer };
  };
  gameFlow(gameFunction);
};

export default brainEvenGame;
