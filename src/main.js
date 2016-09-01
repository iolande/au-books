import environment from './environment';
import {BookService} from './services/book-service';
import {InteractionService} from './services/interaction-service';
import {MockInteractionService} from './mocks/interaction-service';

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .singleton('BookService', BookService)
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use
      .developmentLogging()
      .singleton('InteractionService', MockInteractionService);
  } else {
    aurelia.use
      .singleton('InteractionService', InteractionService);
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
