const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Копіюємо масив за допомогою оператора розширення (...) або slice()
const sortedNumbers = [...numbersList].sort((a, b) => a - b);

console.log("Вихідний масив:", numbersList);
console.log("Відсортований масив (від меншого до більшого):", sortedNumbers);
