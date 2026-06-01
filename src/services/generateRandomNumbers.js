export function generateRandomNumbers(amount = 6) {

  let numbers = [];

  while (numbers.length < amount) {

    const random = Math.floor(Math.random() * 60) + 1;

    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers.sort((a, b) => a - b);
}