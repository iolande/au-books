export class BookListModel {
  _books = []

  get books() {
    return this._books;
  }

  set books(value) {
    this._books = value;
  }
}
