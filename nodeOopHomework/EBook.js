const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    // Геттер для формату файлу
    get fileFormat() {
        return this._fileFormat;
    }

    // Сеттер з валідацією для формату файлу
    set fileFormat(value) {
        const allowedFormats = ["pdf", "epub", "fb2", "txt", "mobi"];
        if (!value || typeof value !== "string" || !allowedFormats.includes(value.toLowerCase())) {
            throw new Error(`Недопустимий формат файлу! Доступні формати: ${allowedFormats.join(", ")}`);
        }
        this._fileFormat = value.toLowerCase();
    }

    // Перевизначений метод виведення інформації
    printInfo() {
        console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat.toUpperCase()}`);
    }

    // Статичний метод створення EBook з об'єкта Book
    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

module.exports = EBook;
