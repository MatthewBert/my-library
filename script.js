const myLibrary = [];

// Constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

addBookToLibrary('Hamlet', 'William Shakespeare', 432, true);
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
addBookToLibrary('50 Below Zero', 'Robert Munsch', 24, true);

// Adds books to myLibrary array
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

// Display books to the DOM 
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

function resetBookShelf(){
    const bookshelf = document.getElementById("Bookshelf");
    myLibrary.forEach(book => {
        const card = document.querySelector(".card");
        card.remove();
    });
}

// Dialog related functions
function showDialog(){
    document.querySelector('#mainDialog').style.display = 'block';
}

function closeDialog(){
    document.querySelector('#mainDialog').style.display = 'none';
}

document.querySelector('.addButton').onclick = showDialog;
document.querySelector('#closeDialog').onclick = closeDialog;


// Form handler
document.querySelector('#bookForm').onsubmit = function(e){
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked;

    if (title && author && !isNaN(pages) && pages >= 1) {
        resetBookShelf();
        addBookToLibrary(title, author, pages, isRead);
        displayBook();
        closeDialog();
        document.querySelector('#bookForm').reset();
      } else {
        alert('Please fill in all fields correctly.');
      }
}

window.onload = displayBook();