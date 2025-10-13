import yargs, { number } from 'yargs';
import { hideBin } from 'yargs/helpers';

// parseSync porque no voy a utilizar tareas asíncronas de momento.
export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true, //indica que el flag -b es necesario.
    describe: 'Multiplication table base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination',
  })
  .check((argv, options) => {
    if (argv.b < 0) throw new Error('Error: base must be greater than 0');
    return true;
  })
  .parseSync()
