import newUserInteraction from './new-user-interaction';

export class MockInteractionService {
  createNewUserInteraction() {
    console.log('making the fake call');

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(newUserInteraction);
      }, 200);
    });
  }

  // createExistingUserInteraction(accountNumber = '123') {

  // }
}
