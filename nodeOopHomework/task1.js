const Book = require('./Book');
const EBook = require('./EBook');

console.log("=== Демонстрація роботи класів Книга та Електронна книга ===");

// 1. Створення звичайних книг
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1911);

console.log("\nВиведення інформації про звичайні книги:");
book1.printInfo();
book2.printInfo();

// 2. Створення електронної книги
const eBook1 = new EBook("1984", "Джордж Орвелл", 1949, "epub");

console.log("\nВиведення інформації про електронну книгу:");
eBook1.printInfo();

// 3. Використання геттерів та сеттерів з валідацією
console.log("\nТестування сеттерів (зміна даних):");
book1.year = 1841;
console.log(`Оновлений рік для ${book1.title}: ${book1.year}`);

try {
    // Спроба встановити некоректний рік (викликасть помилку валідації)
    book1.year = 3000;
} catch (error) {
    console.log(`Помилка валідації перехоплена успішно: ${error.message}`);
}

// 4. Створення масиву книг (Book та EBook) та пошук найдавнішої
const library = [book1, book2, eBook1];

console.log("\nПошук найдавнішої книги за допомогою статичного методу:");
const oldestBook = Book.getOldestBook(library);
console.log(`Найдавніша книга: "${oldestBook.title}" (${oldestBook.year} рік)`);

// 5. Використання статичного методу для створення EBook з Book
console.log("\nСтворення EBook з екземпляра Book за допомогою статичного методу:");
const convertedEBook = EBook.fromBook(book2, "pdf");
convertedEBook.printInfo();
