import 'dotenv/config'
import { greet } from './hello.js';
import { audience } from './world.js';

const userName = process.env.USER_NAME;
const userNumber = process.env.USER_NUMBER;

console.log(`${greet()}, ${audience()}, my name is ${userName}. My phone number is ${userNumber}`)