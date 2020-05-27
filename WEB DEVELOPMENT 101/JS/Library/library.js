
// ARRAY OF ADDED BOOKS
let runningBookNumber = 0;
let myLibrary = [];

// LOAD BUTTONS
const formDisplayBtn = document.querySelector('#new-book-btn')
const bookDisplayBtn = document.querySelector('#book-display-btn');

// LOAD FORM 
const bookFormSubmit = document.querySelector('#submit-form');
const bookForm = document.querySelector('.add-book-form');

// LOAD BOOK-DISPLAY
const bookDisplay = document.querySelector('.display-books');

const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');


function loadEventListeners() {
    bookForm.style.display = 'none';
    bookDisplay.style.display = 'none';

    bookFormSubmit.addEventListener('click', addBookToLibrary);
    
    formDisplayBtn.addEventListener('click', function() {
        if (bookForm.style.display == 'block') {
            bookForm.style.display = 'none';
        } else if (bookForm.style.display == 'none') {
            bookForm.style.display = 'block';
        }
    })

    bookDisplayBtn.addEventListener('click', function() {
        if (bookDisplay.style.display == 'flex') {
            bookDisplay.style.display = 'none';
        } else if (bookDisplay.style.display == 'none') {
            bookDisplay.style.display = 'flex';
        };
    })
}


// Loads the buttons for individual books. Required when adding books

function loadBookListeners() {
    const bookDeleteButtons = document.querySelectorAll('.delete-book-btn');

    bookDeleteButtons.forEach(button => button.addEventListener('click', function() {
        myLibrary.forEach(element => {
            if (element.idNumber == this.getAttribute('data-idNumber')) {
                myLibrary.splice(myLibrary.indexOf(element), 1);
            }
        })

    }));


}

// BOOK OBJECT

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.idNumber = runningBookNumber;
    runningBookNumber++;
}

Book.prototype.info = function () {
    let isBookRead;
    (this.read == true) ? isBookRead = 'is read' : (isBookRead = 'not read yet');

    return (`${this.title} by ${this.author}, ${this.pages} pages, ${isBookRead}`);
}


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


// RENDER THE LIBRARY TO THE PAGE

// CREATING A DIV

function createDiv(book) {
    let newBookItem = document.createElement("div");
    newBookItem.classList.add('book-item');
    newBookItem.setAttribute("data-idNumber", book.idNumber);
    console.log(book.idNumber);

    let deleteBookBtn = document.createElement("button");
    deleteBookBtn.textContent = "X";
    deleteBookBtn.classList.add('delete-book-btn');
    deleteBookBtn.setAttribute("data-idNumber", book.idNumber);

    let titleElement = document.createElement("h2");
    titleElement.textContent = "Title";
    let titleBook = document.createElement("span");
    titleBook.textContent = book.title;

    let authorElement = document.createElement("h2");
    authorElement.textContent = "Author";
    let authorBook = document.createElement("span");
    authorBook.textContent = book.author;

    let pagesElement = document.createElement("h2");
    pagesElement.textContent = "Pages";
    let pagesBook = document.createElement("span");
    pagesBook.textContent = book.pages;

    newBookItem.appendChild(deleteBookBtn);
    newBookItem.appendChild(titleElement);
    newBookItem.appendChild(titleBook);
    newBookItem.appendChild(authorElement);
    newBookItem.appendChild(authorBook);
    newBookItem.appendChild(pagesElement);
    newBookItem.appendChild(pagesBook);

    bookDisplay.appendChild(newBookItem);
}


//  CREATE EXAMPLE BOOKS

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);

let lordRings = new Book("Lord Of The Rings", "J.R.R. Tolkien", 399, true);
myLibrary.push(lordRings);

let lordRings2 = new Book("Lord Of The Rings", "J.R.R. Tolkien", 399, true);
myLibrary.push(lordRings2);

let lordRings3 = new Book("Lord Of The Rings", "J.R.R. Tolkien", 399, true);
myLibrary.push(lordRings3);

myLibrary.forEach(element => {
    createDiv(element);
});


loadEventListeners();
loadBookListeners();