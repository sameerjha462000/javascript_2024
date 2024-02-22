// The default exports are imported without using the {} and we can give them any name while importing without using aliasing.
import introduce, { eat } from "./helpers/humans.js";
import Alien, { secretWeapon as sw } from "./helpers/aliens.js";
import * as life from './helpers/life.js'; //  To import all the exports at once we use * and then use aliasing.


// humans.js ka content
eat('Chole Bhatoore 😋');
introduce('Abhishek');

// aliens.js ka content
const xlr_8 = new Alien('XLR8', -67.3);
xlr_8.introduce();
sw()

// life.js ka content
life.live('Abhishek')
life.sleep('Ibrahim') // In Urdu, we say Abhishek as Ibrahim.

const abhishek = new life.Person('Abhishek', 78) // I will live for 78 years acc to my horoscope
abhishek.future()