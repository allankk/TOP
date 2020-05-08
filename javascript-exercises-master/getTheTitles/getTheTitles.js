const getTheTitles = function() {
    const books = arguments[0];
    const titles = books.map(book => `${book.title}`);

    return titles;
}

module.exports = getTheTitles;
