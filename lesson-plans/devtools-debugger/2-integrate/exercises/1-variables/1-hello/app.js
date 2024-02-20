debugger;
// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

/*
whenFormDataChanges('user-info', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---
 
  let name = readString('the-name');

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name + '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
});
*/

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/

whenFormDataChanges('user-info', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('the-first-name');

  console.log(firstName);
  let secondName = readString('the-second-name');

  console.log(secondName);
  // --- create a message ---

  let greetingF = 'Hello, ' + firstName + ' ' + secondName + '!';
  let greetingB = '\nBye, ' + firstName + ' ' + secondName + '!';
  let greeting = greetingF + greetingB;

  // --- display the message ---

  displayString('greeting-output', greeting);
});
