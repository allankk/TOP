
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
                removeBookHTML(element);
            };
        })
        saveToStorage();
    }));

    const bookReadButtons = document.querySelectorAll('.toggle-read-btn');

    bookReadButtons.forEach(button => button.addEventListener('click', function() {
        myLibrary.forEach(book => {
            if (book.idNumber == this.getAttribute('data-idNumber')) {
                book.read ? book.read = false : book.read = true;
            }
            let bookItem = document.querySelector(`[data-idNumber='${book.idNumber}']`);
            setBackgroundBasedOnRead(book, bookItem);
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
    createDiv(newBook);
    loadBookListeners();    
    saveToStorage();
}


// SET READ PROPERTY
function setReadProperty() {
    const checkRead = document.getElementById("read");
    (checkRead.value == 'true') ? checkRead.value = false : checkRead.value = true
}

// SETS THE BACKGROUND COLOR OF A BOOK BASED ON IF IT HAS BEEN READ

function setBackgroundBasedOnRead(book, bookItem) {
    if (book.read && bookItem.classList.contains('is-not-read')) {
        bookItem.classList.add('is-read');
        bookItem.classList.remove('is-not-read');
        saveToStorage();
    } else if (!book.read && bookItem.classList.contains('is-read')) {
        bookItem.classList.add('is-not-read');
        bookItem.classList.remove('is-read');
        saveToStorage();
    };

}


// RENDER THE LIBRARY TO THE PAGE

// CREATING A DIV

function createDiv(book) {
    let newBookItem = document.createElement("div");
    newBookItem.classList.add('book-item');

    if (book.read == 'true' || book.read == true) {
        newBookItem.classList.add('is-read')
    } else {
        newBookItem.classList.add('is-not-read')
    };

    newBookItem.setAttribute("data-idNumber", book.idNumber);

    let deleteBookBtn = document.createElement("button");
    deleteBookBtn.textContent = "X";
    deleteBookBtn.classList.add('delete-book-btn');
    deleteBookBtn.setAttribute("data-idNumber", book.idNumber);

    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = "Toggle Read Status";
    toggleReadBtn.classList.add('toggle-read-btn');
    toggleReadBtn.setAttribute("data-idNumber", book.idNumber);

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
    newBookItem.appendChild(toggleReadBtn);
    newBookItem.appendChild(titleElement);
    newBookItem.appendChild(titleBook);
    newBookItem.appendChild(authorElement);
    newBookItem.appendChild(authorBook);
    newBookItem.appendChild(pagesElement);
    newBookItem.appendChild(pagesBook);

    bookDisplay.appendChild(newBookItem);
}

// REMOVE A BOOK FROM HTML

function removeBookHTML(book) {
    const elementToRemove = document.querySelector(`[data-idNumber='${book.idNumber}']`);
    elementToRemove.remove();
}

// SAVE LIBRARY TO LOCAL STORAGE

// Storage.protoype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// };

// Storage.prototype.getObject = function(key) {
//     let value = this.getItem(key);
//     return value && JSON.parse(this.getItem(key));
// }

function saveToStorage() {
    localStorage.setItem('my-library', JSON.stringify(myLibrary));
    console.log(localStorage)
}

function getFromStorage() {
    if (localStorage.getItem('my-library') != null) {
        myLibrary = JSON.parse(localStorage.getItem('my-library'));
    }
}


//  CREATE EXAMPLE BOOKS

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);

let lordRings = new Book("Lord Of The Rings", "J.R.R. Tolkien", 399, true);
myLibrary.push(lordRings);

// START THE JS

getFromStorage();

myLibrary.forEach(element => {
    createDiv(element);
});

loadEventListeners();
loadBookListeners();