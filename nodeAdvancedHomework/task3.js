function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи мають бути числами");
    }
    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [10, 0],
    ["10", 2],
    [15, 3]
];

testCases.forEach(([num, denom]) => {
    console.log(`--- Виклик divide(${num}, ${denom}) ---`);
    try {
        const result = divide(num, denom);
        console.log("Результат:", result);
    } catch (error) {
        console.log("Поймано помилку:", error.message);
    } finally {
        console.log("Робота завершена\n");
    }
});
