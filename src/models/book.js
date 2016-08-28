import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class BookCollection {
  booksPromise = null;

  constructor(client) {
    this.client = client;

    this.client.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });
  }

  getBooks({ genre = null } = {}) {
    if (!this.booksPromise) {
      this.booksPromise = this.client.fetch('books')
        .then(response => response.json());
    }

    // if (!!genre) { return getBooksByGenre(genre); }

    return this.booksPromise;
  }

  // Work this out...
  getBooksByGenre(genre) {
    // return this.booksPromise.then();
  }
}
