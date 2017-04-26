const brainEvenGame = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';
  const question = Math.floor((Math.random() * 99) + 1);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { message, question, correctAnswer };
};

export default brainEvenGame;
