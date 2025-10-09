// require('./js-foundation/02-destructuring');
// require('./js-foundation/05-factory');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { emailTemplate } = require('./js-foundation/01-template')

// console.log(emailTemplate);

// const id = 1
// // getUserById( arg0: number, arg1: (arg0: string, arg1: { id: number, name: string }) => void)
// getUserById(id, (error, user) => {
//   if (error) { throw new Error(error); }
//   console.log(user);
// });

// const { getID, getAge } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getID, getAge });
// const obj = { name: 'John', birthdate: '1998-07-22' };
// const john = makePerson(obj)
// console.log(john);

import { getPokemonById } from "./js-foundation/06-promises";

getPokemonById(7)
  .then(pokemon => console.log(pokemon))
  .catch(error => console.error(error))
  .finally(() => console.log('Final'));

// import { buildLogger } from "./plugins";

// const logger = buildLogger('app.js');
// logger.log('Hola mundo');
// logger.error('Un error erroroso');
