function checkAge(age) {
    return age >= 18;
}

console.log("Вік 25, чи доросла особа?", checkAge(25)); // true
console.log("Вік 15, чи доросла особа?", checkAge(15)); // false
