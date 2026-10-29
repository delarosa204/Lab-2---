class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери
    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    // Сеттери з валідацією
    set title(value) {
        if (!value || typeof value !== "string" || value.trim() === "") {
            throw new Error("Назва книги повинна бути непустим рядком!");
        }
        this._title = value;
    }

    set author(value) {
        if (!value || typeof value !== "string" || value.trim() === "") {
            throw new Error("Автор повинен бути непустим рядком!");
        }
        this._author = value;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== "number" || value < 1000 || value > currentYear) {
            throw new Error(`Рік видання має бути числом від 1000 до ${currentYear}!`);
        }
        this._year = value;
    }

    // Метод виведення інформації
    printInfo() {
        console.log(`Книга: "${this._title}", Автор: ${this._author}, Рік видання: ${this._year}`);
    }

    // Статичний метод для пошуку найдавнішої книги
    static getOldestBook(books) {
        if (!books || books.length === 0) return null;
        return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
    }
}

module.exports = Book;
