import takeAChance from './take-a-chance.js';

const takeAChanceColin = takeAChance('colin');

takeAChanceColin
  .then(message => console.log(message))
  .catch(reason => console.log(reason.message));
