
// ARRAY OF ADDED BOOKS
let myLibrary = [];

// LOAD BUTTONS
const formDisplayBtn = document.querySelector('#new-book-btn')


// LOAD FORM 
const bookFormSubmit = document.querySelector('#submit-form');
const bookForm = document.querySelector('.add-book-form');

const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');


function loadEventListeners() {
    bookForm.style.display = 'none';
    bookFormSubmit.addEventListener('click', addBookToLibrary);
    
    formDisplayBtn.addEventListener('click', function() {
        if (bookForm.style.display == 'block') {
            bookForm.style.display = 'none';
        } else if (bookForm.style.display == 'none') {
            bookForm.style.display = 'block';
        }
    })
}

// BOOK OBJECT

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function () {
    let isBookRead;
    (this.read == true) ? isBookRead = 'is read' : (isBookRead = 'not read yet');

    return (`${this.title} by ${this.author}, ${this.pages} pages, ${isBookRead}`);
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);

// TAKE USERS INPUT TO ADD A BOOK

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);   
    
    bookForm.reset();
    
    myLibrary.push(newBook);
}


// SET READ PROPERTY
function setReadProperty() {
    const checkRead = document.getElementById("read");
    (checkRead.value == 'true') ? checkRead.value = 'false' : checkRead.value = 'true'
}



loadEventListeners()