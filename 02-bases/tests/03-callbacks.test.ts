import { getUserById } from '../src/js-foundation/03-callbacks'

describe('js-foundation/03-callbacks.ts', () => {

  test('getUserById should return an error if user does not exist', (done) => {

    const id = 10;

    // Test de un callback
    getUserById(id, (error, user) => {

      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done(); // Se llama cuando sabemos que acaba nuestro test. Se llama en test que duren mucho tiempo.
    })

  });

  test('id 1 should be named John Doe', () => {

    const id = 1;

    getUserById(id, (error, user) => {
      expect(error).toBeUndefined();
      expect(user).toStrictEqual({ 
        id: 1, 
        name: 'John Doe' 
      });
    })

  })
  
});