const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

console.log("Масив:", numbers);
console.log("Сума всіх елементів:", sum);
