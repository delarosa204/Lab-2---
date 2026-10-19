const initialArray = [1, 2, 3, 4, 5];

const mutatedArray = initialArray.map((value, index) => value * index);

console.log("Початковий масив:", initialArray);
console.log("Новий масив (значення помножене на індекс):", mutatedArray);
