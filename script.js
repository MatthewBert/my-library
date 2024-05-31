const myLibrary = [];

// Constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.readBook = function() {
    this.isRead = !this.isRead;
  }

// Adds books to myLibrary array
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBook();
}

// Display books to the DOM 
function displayBook(){
    const bookshelf = document.getElementById('bookshelf');
    //Reset the bookshelf by getting innerHTML to nothing, this removes duplicates
    bookshelf.innerHTML = "";
    myLibrary.forEach((book,index) =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.isRead ? 'Yes' : 'No'}</p>
        <button onclick="removeBook(${index})">Remove</button>
        <button onclick="readStatus(${index})">Toggle Read</button>`;

        bookshelf.appendChild(card);
    });
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBook();
}

function readStatus(index) {
    myLibrary[index].readBook();
    displayBook();
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
        addBookToLibrary(title, author, pages, isRead);
        displayBook();
        closeDialog();
        document.querySelector('#bookForm').reset();
      } else {
        alert('Please fill in all fields correctly.');
      }
}

addBookToLibrary('Hamlet', 'William Shakespeare', 432, true);
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false);
addBookToLibrary('50 Below Zero', 'Robert Munsch', 24, true);

window.onload = displayBook();