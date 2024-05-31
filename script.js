const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

addBookToLibrary('Hamlet', 'William Shakespeare', 432, true);
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
addBookToLibrary('50 Below Zero', 'Robert Munsch', 24, true);

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayBook(){
    const bookshelf = document.getElementById("bookshelf");

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        bookshelf.appendChild(card);
    });
}

window.onload = displayBook;