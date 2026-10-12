// 1. Function Declaration
function getRectangleAreaDecl(width, height) {
    return width * height;
}

// 2. Function Expression
const getRectangleAreaExpr = function(width, height) {
    return width * height;
};

// 3. Arrow Function
const getRectangleAreaArrow = (width, height) => width * height;

// Виклик функцій з аргументами 5 і 10 та виведення результату в консоль
console.log("Площа (Function Declaration):", getRectangleAreaDecl(5, 10));
console.log("Площа (Function Expression):", getRectangleAreaExpr(5, 10));
console.log("Площа (Arrow Function):", getRectangleAreaArrow(5, 10));
