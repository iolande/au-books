import environment from './environment';
import {BookService} from './services/book-service';
import {Datacontext} from './services/datacontext';

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .singleton('BookService', BookService)
    .singleton('Datacontext', Datacontext)
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
