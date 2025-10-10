import { httpClientPlugin } from '../../src/plugins'

describe('plugins/http-client.plugin', () => {

  test('httpClientPlugin should return a string', async () => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
    
    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": expect.any(Boolean)
    });

  });

  test('httpClientPlugin should have POST, PUT and DELETE methods', () => {

    const keys = Object.keys(httpClientPlugin);

    expect(keys).toContain('post');
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(keys).toContain('put');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(keys).toContain('delete');
    expect(typeof httpClientPlugin.delete).toBe('function');

  });

});