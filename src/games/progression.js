import gameFlow from '../';

const requiredProgressionLength = 10;
const description = 'What number is missing in this progression?';

const buildProgressionIter = (step, currentProgression) => {
  if (currentProgression.length === requiredProgressionLength) {
    return currentProgression;
  }
  return buildProgressionIter(
      step, [...currentProgression, currentProgression.slice().pop() + step]);
};

const genQuestionAndAnswer = () => {
  const step = Math.floor((Math.random() * 9) + 1);
  const firstElement = Math.floor((Math.random() * 8) + 1);
  const progression = buildProgressionIter(step, [firstElement]);
  const hideIndex = Math.floor((Math.random() * 10));
  const correctAnswer = `${progression[hideIndex]}`;
  const question = [...progression.slice(0, hideIndex), '..', ...progression.slice(hideIndex + 1)].join(' ');
  return { question, correctAnswer };
};

const brainProgressionGame = () => gameFlow(description, genQuestionAndAnswer);

export default brainProgressionGame;
