import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class InteractionService {
  constructor(client) {
    this.client = client;

    this.client.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });
  }

  createNewUserInteraction() {
    console.log('making the real call');

    return this.client.fetch('books')
      .then(response => response.json());
  }
}
