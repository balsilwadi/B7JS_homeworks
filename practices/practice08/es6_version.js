class Author{
    constructor(firstName, lastName, country, books){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.books = books;
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getBooks(){
        return this.books
    }
}


class Books{
    constructor(title, genre, page){
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}

const book1 = new Books("A Game of Thrones", "Epic Fantasy", 694)
const book2 = new Books("A Clash of Kings", "Epic Fantasy", 768)
const book3 = new Books("A Storm of Swords", "Epic Fantasy", 973)

const author1 = new Author("George R. R.", "Martin", "United States", [book1, book2, book3])
const author2 = new Author("Bilal", "alsilwadi", "United States", [])

console.log(author1.getFullName())
console.log(author2.getFullName())


