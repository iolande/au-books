import {inject} from 'aurelia-framework';

@inject('Datacontext')
export class Index {
  constructor(datacontext) {
    this.datacontext = datacontext;
  }

  activate() {
    return this.datacontext.getBooks();
      // .catch(console.log.bind(console)); // What does this do, exactly? #3 in this article https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  }

  created() {
    this.books = this.datacontext.books;
  }
}
