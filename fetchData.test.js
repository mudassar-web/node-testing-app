const fetchData = require('./fetchData');
const axios = require('axios');

jest.mock('axios');

test('fetch data successfully from an API', async () => {
  const data = { userId: 1, id: 1, title: 'Sample Title', body: 'Sample Body' };
  axios.get.mockResolvedValue({ data });

  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  expect(result).toEqual(data);
});

test('fetch error from an API', async () => {
  const errorMessage = 'Network Error';
  axios.get.mockRejectedValue(new Error(errorMessage));

  try {
    await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  } catch (e) {
    expect(e.message).toBe(errorMessage);
  }
});