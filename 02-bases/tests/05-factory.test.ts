import {buildMakePerson} from '../src/js-foundation/05-factory'

describe('js-foundation/05-factory', () => {

  const getAge = () => 20;
  const getUUID = () => '12345';

  test('buildMakePerson should return a function', () => {

    const makePerson = buildMakePerson({ getAge, getUUID });
    expect(typeof makePerson).toBe('function');

  });

  test('makePerson should return a person', () => {

    const makePerson = buildMakePerson({ getAge, getUUID });
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '2004-12-31' });
    expect(johnDoe).toStrictEqual({
      id: '12345',
      name: 'John Doe',
      birthdate: '2004-12-31',
      age: 20
    });

  });

});