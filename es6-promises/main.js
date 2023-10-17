import takeAChance from './take-a-chance.js';

takeAChance('Ross')
  .then((message) => {
    console.log(message);
  })
  .catch((Error) => {
    console.log(Error.message);
  });
