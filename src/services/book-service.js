import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class BookService {
  constructor(client) {
    this.client = client;

    this.client.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });
  }

  getBooks() {
    return this.client.fetch('books')
      .then(response => response.json());
  }

  getBooksByGenre(genre) {
    return this.client.fetch(`books?genre=${genre}`)
      .then(response => response.json());
  }

  postBook(data) {
    return this.client.fetch('books', {
      method: 'post',
      body: json(data)
    })
    .then(response => response.json());
  }
}
