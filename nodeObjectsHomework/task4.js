const person = {
    firstName: "Олександр",
    lastName: "Петренко",
    age: 25
};

person.email = "oleksandr@gmail.com";
delete person.age;

console.log("Оновлений об'єкт person:", person);
