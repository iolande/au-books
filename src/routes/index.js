import {inject} from 'aurelia-framework';
import {Datacontext} from '../services/datacontext';
import {BookListModel} from '../vvm/book-list/model';

@inject(Datacontext, BookListModel)
export class Index {
  constructor(datacontext, bookListModel) {
    this.datacontext = datacontext;
    this.bookListModel = bookListModel;
  }

  activate() {
    return this.datacontext.getBooks();
      // .catch(console.log.bind(console)); // What does this do, exactly? #3 in this article https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  }

  created() {
    this.bookListModel.books = this.datacontext.books;
  }
}
