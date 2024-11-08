// single line comment

/*
    Multi line comments

    I can write whatever in here!!!


    DATA 
        Data is information; food for the computer to process

        Five primitive data types

        Number =>  2, 1.4333, -89
        String => "Hello World", "4", 'Hello World'
        Boolean => true, false
        undefined
        null

*/

console.log(8 + 5);

/*
    Number

    Any numeric character that can be calculated

    With number we can write expressions

    + => Addition 8 + 5
    - => Subtraction 8 - 5
    * => Multiplication 8 * 5
    / => Division 8 / 5
    ** => Exponent 8 ** 5
    % => Modulus 8 % 5 => Returns the remainder

    We can also order our operations

    PEMDAS



*/

console.log(8 - 5); // 3
console.log(8 * 5); // 40
console.log(8 / 5); // 1.66
console.log(8 ** 5);
console.log(8 % 5); // 3

console.log((8 - 3) / 5 + 8 * 3);

console.clear();

/**
 * 
 * String 
 * 
 * Character text => any value/key on the keyboard
 * 
 * Strings are represented by quotations
 *  Can be single or double quotes
 * 
 * "Hello World"
 * 
 * Whitespace is included in the string
 * 
 * Concatenation => combine two or more strings
 */

console.log("Satch");
console.log("Hello World");
console.log("Hello            World");

console.log('8');
console.log(8);

console.log(8 + 5); // 13
console.log("8 + 5"); // "8 + 5"

console.log("Hello" + " " + 'World'); // HelloWorld

console.log('You can\'t do this!')

console.log("Coach said 'You can use \nescapes to make a quote work\n or to make haiku!'")

/**
 * 
 * Boolean
 * 
 * Boolean => True or False
 */

console.log(false);
console.log(true);

/**
 * 
 * undefined
 * 
 */

console.log(undefined)


/**
 * null
 */

console.log(null);

/**
 * Data storage => variables
 * 
 * var, let, const
 * 
 * syntax:
 *      var varName = data;
 * 
 * var keyword
 * 
 * naming rules and conventions
 * 
 * - must not begin with a number or any special character; must begin with a letter; generally begins with a lowercase letter
 * 
 * - for multiple words, no spaces or hyphens; use camelCase or underscore
 * - variable names should mean something or represent the data
 * 
 */
console.clear()

var myName = 'Satch';
console.log(myName);

var inventory;
inventory = 8;


inventory = 12;

console.log(inventory)

inventory = inventory + 5;
console.log(inventory)

console.clear()

var subtotal = 28

var taxRate = 0.09

var total = subtotal + subtotal * taxRate;

console.log(total) //

/**Temperature Converter
 * 
 * Take a temperature in fahrenheit (fah) and convert it to celsius (cel)
 */

//Pseudocode => a humanlike way of writing a program; not language specific; focus is on logic

/**
 * Input => temperature in fahrenheit
 * Output => temperature in celsius
 * 
 * SET fah
 * SET cel to (fah - 32) * 5  / 9
 * RETURN cel
 * 
 * Input => temp in cel
 * Output => temp in fah
 * 
 * SET cel
 * SET fah to (cel * 9 / 5) + 32
 */

// var fah = 32
// var cel = (fah - 32) * 5 / 9

// console.log(cel)

var cel = 100 
var fah = (cel * 9 / 5) + 32

console.log(fah) // 212

var aString = '        The Los Angeles       Dodgers are the 2024 World Series Champions!!!       ';

// How to find out how many characters are in a string? .length

console.log(aString.length)

console.clear()

console.log(inventory);

// inventory = inventory + 10;

// augmented arithmetic

inventory += 10;

console.log(inventory); // 27

var itemsToBeAdded = 20;

var itemsSold = 15

inventory+=itemsToBeAdded;

console.log(inventory);

inventory -= itemsSold;

console.log(inventory);

let coderTotal = 20;

const ssn = 453097644

coderTotal -= 2;

console.log(coderTotal);

ssn = 5439912313

console.log(ssn);

