import { gameFlow } from '../';

const brainEvenGame = () => {
  const gameFunction = () => {
    const question = Math.floor((Math.random() * 99) + 1);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  gameFunction.description = 'Answer "yes" if number even otherwise answer "no".';
  gameFlow(gameFunction);
};

export default brainEvenGame;
