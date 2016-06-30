import {inject} from 'aurelia-framework';

@inject('BookService')
export class Datacontext {
  books = [];

  constructor(bookService) {
    this.bookService = bookService;
  }

  getBooks() {
    if (this.books.length > 0) { return null; }

    return this.bookService.getBooks()
      .then(response => this.books = response);
  }

  getBooksByGenre(genre) {
    if (this.books.length > 0) {
      // filter cached array by genre & return
      let filteredArray = this.books.filter(book => {
        return book.genre.toLowerCase() === genre.toLowerCase();
      });

      return filteredArray;
    }

    // or I could do a getBooks() then filter as above so they're cached
    return this.bookService.getBooksByGenre(genre);
  }
}
