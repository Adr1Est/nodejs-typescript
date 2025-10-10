import { getAge } from '../../src/plugins'

describe('plugins/get-age.plugin.ts', () => {
  
  test('getAge should return the age of a person', () => {

    const birthdate = '2001-01-01';
    const age = getAge(birthdate);

    expect(age).toBe(24);

  });

  test('getAge should return current age', () => {

    const birthdate = '2001-01-01';
    const age = getAge(birthdate);

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);

  });

  test('getAge should return 0 years', () => {

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    
    const birthdate = '1995-01-01';
    const age = getAge(birthdate);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith();
    
  });

});