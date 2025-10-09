// No hace falta poner /index, lo encontrará automáticamente.
// const { getID, getAge } = require('../plugins')
interface BuildMakerPersonOptions {
  getID: () => string;
  getAge: (birthdate: string) => string;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

const obj: PersonOptions = { name: 'John', birthdate: '1998-07-22' };

export const buildMakePerson = ({ getID, getAge }: BuildMakerPersonOptions) => {

  return ({ name, birthdate }: PersonOptions) => {

    return {
      id: getID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    }
  }
}

// const john = buildPerson(obj);
// console.log(john);