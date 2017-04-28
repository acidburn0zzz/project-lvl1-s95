import { gameFlow } from '../';

const brainProgressionGame = () => {
  const requiredProgressionLength = 10;
  const gameFunction = () => {
    const step = Math.floor((Math.random() * 9) + 1);
    const firstElement = Math.floor((Math.random() * 8) + 1);
    const buildProgressionIter = (currentProgression = [firstElement]) => {
      if (currentProgression.length === requiredProgressionLength) {
        return currentProgression;
      }
      return buildProgressionIter([...currentProgression, currentProgression.slice().pop() + step]);
    };
    const progression = buildProgressionIter();
    const hideIndex = Math.floor((Math.random() * 10));
    const correctAnswer = `${progression[hideIndex]}`;
    const question = [...progression.slice(0, hideIndex), '..', ...progression.slice(hideIndex + 1)].join(' ');
    return { question, correctAnswer };
  };
  gameFunction.description = 'What number is missing in this progression?';
  gameFlow(gameFunction);
};

export default brainProgressionGame;
