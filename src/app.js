export class App {
  configureRouter(config, router) {
    config.title = 'Books';
    config.map([
      { route: '', name: 'home', moduleId: 'routes/index', nav: true, title: 'Home' }
    ]);
    this.router = router;
  }
}
