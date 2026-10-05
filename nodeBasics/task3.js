let length = 10;
let width = 5;

let area = length * width;
console.log("Довжина:", length);
console.log("Висота/Ширина:", width);
console.log("Площа прямокутника:", area);

let calculationType = "area";

switch (calculationType) {
    case "area":
        let calculatedArea = length * width;
        console.log("Результат через switch/case (площа):", calculatedArea);
        break;
    case "perimeter":
        let perimeter = 2 * (length + width);
        console.log("Результат через switch/case (периметр):", perimeter);
        break;
    default:
        console.log("Невідомий тип обчислення");
}
