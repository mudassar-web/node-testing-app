const getUserData = require('./user');
const fetchData = require('./fetchData');

jest.mock('./fetchData');

test('returns user data for a given userId', async () => {
  const data = { id: 1, name: 'MD Ansari' };
  fetchData.mockResolvedValue(data);

  const result = await getUserData(1);
  expect(result).toEqual(data);
  expect(fetchData).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
});