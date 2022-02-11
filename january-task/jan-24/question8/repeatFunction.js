const degree = (str) => `${str}°`;
const exclaim = (str) => `${str}!`;
const doubleChars = (str) => str.split('').map(c => `${c}${c}`).join('');
const repeat = (input, num, callback) => {
let result = input;
    for (i = 0; i < num; i++) {
      result = callback(result);
    }
    return result;
  }
  console.log(repeat('Infinite Power', 3, exclaim));
  console.log(repeat('Triple', 2, doubleChars));
  console.log(repeat('rogdor', 3, t => `°${t}°`));