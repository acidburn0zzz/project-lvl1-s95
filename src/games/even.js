import gameFlow from '../';

const description = 'Answer "yes" if number even otherwise answer "no".';

const genQuestionAndSolution = () => {
  const question = Math.floor((Math.random() * 99) + 1);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainEvenGame = () => gameFlow(description, genQuestionAndSolution);

export default brainEvenGame;
