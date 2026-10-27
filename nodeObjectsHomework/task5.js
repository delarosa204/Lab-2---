const users = [
    { name: "Анна", email: "anna@gmail.com", age: 20 },
    { name: "Максим", email: "maksym@gmail.com", age: 22 },
    { name: "Софія", email: "sofia@gmail.com", age: 19 }
];

for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
