import {inject} from 'aurelia-framework';
import {BookListModel} from './model';

@inject(BookListModel)
export class BookList {
  constructor(bookListModel) {
    this.model = bookListModel;
  }
}
