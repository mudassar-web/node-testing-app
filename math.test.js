const { add, subtract, multiply, divide } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply 5 * 4 to equal 20', ()=>{
  expect(multiply(5,4)).toBe(20)
})

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divides 9 / 3 to equal 3', () => {
  expect(divide(9, 3)).toBe(3);
});

test('divides 5 / 0 to be Infinity', () => {
  expect(divide(5, 0)).toBe(Infinity);
});

test('divides 0 / 1 to be 0', () => {
  expect(divide(0,1)).toBe(0);
});