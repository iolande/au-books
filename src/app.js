export class App {
  configureRouter(config, router) {
    config.title = 'Books';
    config.map([
      { route: '', name: 'home', moduleId: 'routes/index', nav: true, title: 'Home' }
    ]);
    config.options.pushState = true;
    this.router = router;
  }
}
