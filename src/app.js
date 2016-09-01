export class App {
  configureRouter(config, router) {
    config.title = 'Books';
    config.map([
      { route: '', name: 'home', moduleId: 'routes/index', nav: true, title: 'Home' },
      { route: 'multi-step-form', name: 'multi-step-form', moduleId: 'routes/multi-step-form', nav: true, title: 'Multi step form' },
      { route: 'experiments', name: 'experiments', moduleId: 'routes/experiments', nav: true, title: 'Experiments' },
      { route: 'books', name: 'books', moduleId: 'routes/books', nav: true, title: 'Books' }
    ]);
    this.router = router;
  }
}
