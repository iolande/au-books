import {inject} from 'aurelia-framework';

@inject('BookService', 'InteractionService')
export class Datacontext {
  books = [];

  constructor(bookService, interactionService) {
    this.bookService = bookService;
    this.interactionService = interactionService;
  }

  createNewUserInteraction() {
    return this.interactionService.createNewUserInteraction();
  }

  getBooks() {
    if (this.books.length > 0) { return null; }

    return this.bookService.getBooks()
      .then(response => this.books = response);
  }

  getBooksByGenre(genre) {
    if (this.books.length > 0) {
      // filter cached array by genre & return
      const filteredArray = this.books.filter(book => {
        return book.genre.toLowerCase() === genre.toLowerCase();
      });

      return filteredArray;
    }

    // or I could do a getBooks() then filter as above so they're cached
    return this.bookService.getBooksByGenre(genre);
  }
}
