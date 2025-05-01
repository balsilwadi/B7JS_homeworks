function Author(firstName, lastName, country, books){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.books = books;
}

Author.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}

Author.prototype.getBooks = function () {
    return this.books
}

function Books(title, genre, page){
    this.title = title;
    this.genre = genre;
    this.page = page;
}

const book1 = new Books("A Game of Thrones", "Epic Fantasy", 694)
const book2 = new Books("A Clash of Kings", "Epic Fantasy", 768)
const book3 = new Books("A Storm of Swords", "Epic Fantasy", 973)

const author = new Author("George R. R.", "Martin", "United States", [book1, book2, book3])

console.log(author.getFullName())

for(const book of author.getBooks()){
    console.log(book);
}


