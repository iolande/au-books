export class BooksRoute {
  configureRouter(config, router) {
    config.title = 'Books';
    config.map([
      { route: '', name: 'book', moduleId: '../views/book', nav: false, title: 'Books' },
      { route: '{:bookId}', name: 'book', moduleId: '../views/book', nav: true, title: 'Book' },
      { route: '/new', name: 'book', moduleId: '../views/book', nav: true, title: 'Add book' }
    ]);

    router.baseUrl = 'books';
    this.router = router;
  }
}
