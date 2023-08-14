//Personal Message: Store a person’s name in a variable, and print a message to that person. 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("Question no 2");
var Name = "Erick";
var message = "Hello";
console.log("\"".concat(message, " ").concat(Name, ", would you like to learn some python today?\""));
//Name = "Munazza Zahid"
//Date = 8- 5 -2023
console.log();
console.log("Question no 3");
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.\
// function toTitleCase(str: string) {
//     return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
// }
// let personName = "Munazza Zahid";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// let titleCaseName = toTitleCase(personName);
// console.log(titleCaseName); // Output: "John Doe"
var personName = "Munazza Zahid";
console.log("lowercase:");
console.log(personName.toLowerCase());
console.log("\nuppercase:");
console.log(personName.toUpperCase());
var titleCaseString = personName.replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase(); });
console.log("\ntitlecase:");
console.log(titleCaseString);
console.log();
//Name = "Munazza Zahid"
//Date = 8-5-2023
//i store author name in a variable and a quote in a variable
//with the help of template literals i have print that message
console.log("Question no 4");
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var authorName = "AlbertEinstein";
var quote = "A person who never made a mistake never tried anything new.";
console.log("".concat(authorName, " once said , \"").concat(quote, "\" "));
console.log();
console.log("Question no 5");
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
//famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "AlbertEinstein";
var _quote = "A person who never made a mistake never tried anything new";
var _message = "".concat(authorName, " once said , \"").concat(quote, "\" ");
console.log(_message);
console.log();
console.log("Question no 6");
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
//of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
//once,so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personNameWithWhitespace = "\t   John Doe   \n";
// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);
// Strip whitespace from the name
var strippedName = personNameWithWhitespace.trim();
// Print the name after stripping whitespace
console.log("Stripped Name:");
console.log(strippedName);
console.log();
console.log("Question no 7");
//Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(32 / 4);
console.log();
console.log("Question no 8");
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log();
console.log("Question no 9");
// Favorite Number: Store your favorite number in a variable.
//  Then, using that variable, create a message that reveals your favorite number. Print that message.
var favourateNumber = 20;
console.log("My favourate number is ".concat(favourateNumber));
console.log();
console.log("Question no 10");
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you
//  don’t have anything specific to write because your programs are too simple at this point, just add your 
//  name and the current date at the top of each program file. Then write one sentence describing what the 
//  program does.
console.log();
console.log("Question no 11");
// Names: Store the names of a few of your friends 
// in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var _myfreindsName = ["Munazza", "Sana", "Rimsha", "Janavive"];
for (var _i = 0, _myfreindsName_1 = _myfreindsName; _i < _myfreindsName_1.length; _i++) {
    var name_1 = _myfreindsName_1[_i];
    console.log(name_1);
}
console.log();
console.log("Question no 12");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be 
//  personalized with the person’s name.
// Store names in an array called names
var names = ["Munazza", "Sana", "Rimsha", "Janavive"];
// Print personalized greetings for each person
for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
    var name_2 = names_1[_a];
    console.log("Hello, ".concat(name_2, "! Hope you're having a great day."));
}
console.log();
console.log("Question no 13");
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a 
// list that stores several examples. Use your list to print a series of statements about these items, such as
//  “I would like to own a Honda motorcycle.”
var myfavouratemodeoftransports = ["Honda", "Harley-Davidson", "BMW", "Ducati", "Kawasaki"];
for (var _b = 0, myfavouratemodeoftransports_1 = myfavouratemodeoftransports; _b < myfavouratemodeoftransports_1.length; _b++) {
    var name_3 = myfavouratemodeoftransports_1[_b];
    console.log("I would, like to own a ".concat(name_3));
}
console.log();
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
// that includes at least three people you’d like to invite to dinner. Then use your list to print a message 
// to each person, inviting them to dinner.
console.log("Question no 14");
var invitation = ["Mr.Zahid", "Darick", "Kathriene"];
for (var _c = 0, invitation_1 = invitation; _c < invitation_1.length; _c++) {
    var guest = invitation_1[_c];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
console.log();
console.log("Question no 15");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
//  a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
//  of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are
//  inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Array of people to invite to dinner
var guestList = ["Mr.Zahid", "Darick", "Kathriene"];
// Print invitation messages for each person
for (var _d = 0, guestList_1 = guestList; _d < guestList_1.length; _d++) {
    var guest = guestList_1[_d];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there."));
}
// Guest who can't make it
var _unableToAttend = guestList[1];
// Update guest list and invite a new person
guestList[1] = "Albert Einstein";
// Print a message about the guest who can't make it
console.log("".concat(_unableToAttend, " can't make it to the dinner."));
// Print the updated invitation messages for the remaining guests
for (var _e = 0, guestList_2 = guestList; _e < guestList_2.length; _e++) {
    var guest = guestList_2[_e];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there."));
}
console.log();
console.log("Question no 16");
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
//  you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print 
// a new set of invitation messages, one for each person in your list.
var guestcoming = ["Mr.Zahid", "Darick", "Kathriene"];
for (var _f = 0, guestcoming_1 = guestcoming; _f < guestcoming_1.length; _f++) {
    var guest = guestcoming_1[_f];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
var _unabletocome = guestcoming[0];
guestcoming[0] = "Fionna";
console.log("".concat(_unabletocome, " can't make it to the dinner"));
for (var _g = 0, guestcoming_2 = guestcoming; _g < guestcoming_2.length; _g++) {
    var name_4 = guestcoming_2[_g];
    console.log("Dear ".concat(name_4, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
console.log("Good news! we found a bigger dinner table");
guestcoming.unshift("Leslie");
guestcoming.splice(2, 0, "Diana");
guestcoming.push("Elsa");
for (var _h = 0, guestcoming_3 = guestcoming; _h < guestcoming_3.length; _h++) {
    var guest = guestcoming_3[_h];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
console.log();
console.log("Question no 17");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have
//  space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
//  people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//  your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
// an empty list at the end of your program.
// Starting with the program from Exercise 16
for (var _j = 0, guestcoming_4 = guestcoming; _j < guestcoming_4.length; _j++) {
    var name_5 = guestcoming_4[_j];
    console.log("Dear ".concat(name_5, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
console.log("Good news! we found a bigger dinner table");
guestcoming.unshift("Leslie");
guestcoming.splice(2, 0, "Diana");
guestcoming.push("Elsa");
for (var _k = 0, guestcoming_5 = guestcoming; _k < guestcoming_5.length; _k++) {
    var guest = guestcoming_5[_k];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
// Inform about the smaller dinner table
console.log("Oops! The new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guestcoming.length > 2) {
    var removedGuest = guestcoming.pop();
    console.log("".concat(removedGuest, ", we're sorry, but we can't invite you to dinner."));
}
// Print a message to the two people still on your list
for (var _l = 0, guestcoming_6 = guestcoming; _l < guestcoming_6.length; _l++) {
    var guest = guestcoming_6[_l];
    console.log("Dear ".concat(guest, ", you're still invited to join us for a special dinner. We would be honored to have you there."));
}
// Remove the last two names from your list, so you have an empty list
guestcoming = [];
// Print your list to make sure you actually have an empty list at the end of your program
console.log(guestcoming); // Output: []
console.log();
console.log("Question no 18");
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Array of places to visit
var placesToVisit = ["Paris", "Tokyo", "Rome", "New York", "Bali"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to its original order
placesToVisit.reverse();
// Print the list to show it's back to its original order
console.log("\nBack to Original Order:");
console.log(placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed to reverse alphabetical
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
console.log();
console.log("Question no 19");
// Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people you are inviting to dinner.
var _invitation = ["Mr.Zahid", "Darick", "Kathriene"];
for (var _m = 0, _invitation_1 = _invitation; _m < _invitation_1.length; _m++) {
    var guest = _invitation_1[_m];
    console.log("Dear ".concat(guest, ", you are invited to join us for a special dinner. We would be honored to have you there"));
}
console.log("The number of people invited to dinner is: ".concat(_invitation.length));
console.log();
console.log("Question no 20");
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
// cities,languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of favorite books
var favoriteBooks = [
    "Heal Yourself",
    "The Secret",
    "The intelligent trader",
    "Power of Now",
    "Rich Dad and Poor Dad",
];
// Print the list of favorite books
console.log("My Favorite Books:");
for (var _o = 0, favoriteBooks_1 = favoriteBooks; _o < favoriteBooks_1.length; _o++) {
    var book = favoriteBooks_1[_o];
    console.log(book);
}
console.log();
console.log("Question no 21");
;
var fooditem1 = {
    name: "Simple cupcake",
    calories: 150,
    inventedby: "U.S.A"
};
var fooditem2 = {
    name: "Biryani",
    calories: 292,
    inventedby: "Iran"
};
var fooditem3 = {
    name: "Pizza",
    calories: 285,
    inventedby: "Italy"
};
// Print the food objects
console.log(fooditem1);
console.log(fooditem2);
console.log(fooditem3);
console.log();
console.log("Question no 22");
//   Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//   Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the 
//   program.
// Create an array of colors
var colors = ["Red", "Green", "Blue", "Yellow"];
// Try to access an element at an invalid index (index error)
var invalidIndex = 10; // This index is out of bounds for the array
console.log(colors[invalidIndex]); // This will produce an index error
// Correct the error by checking the index before accessing the element
if (invalidIndex >= 0 && invalidIndex < colors.length) {
    console.log(colors[invalidIndex]);
}
else {
    console.log("Invalid index: ".concat(invalidIndex));
}
console.log();
console.log("Question no 23");
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
//  the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var temperature = 25;
console.log("Is temperature is greater than 20? I predict True.");
console.log(temperature > 20);
var _age = 15;
console.log("Is age is less then 16 ? I predict true");
console.log(_age < 16);
var isPouring = true;
console.log("Is it poouring outside? I predict true");
console.log(isPouring);
var candidatename = "Ellaf";
console.log("Is candidate name is equal to Ellaf and Is candidate data type is same and equal to ellaf ? I predict true");
console.log(candidatename == "Ellaf" && candidatename === "Ellaf");
var foodispreparedbyMom = true;
console.log("Is food is prepared by Mom? I predict true");
console.log(foodispreparedbyMom);
var fruit = "Avocado";
console.log("Is fruit variable data type is string and equal to Rasberry? I predict false");
console.log(fruit === "Rasberry");
var city = 'New York';
console.log("Is city equal to 'New York'? I predict False.");
console.log(city === 'New York');
var isWeekend = false;
console.log("Is it the weekend? I predict False.");
console.log(isWeekend);
var grade = 'B';
console.log("Is grade equal to 'A'? I predict False.");
console.log(grade === 'A');
var personAge = 22;
console.log("Is in frozen 2 Anna age's is less then 20? I predicted false");
console.log(personAge < 20);
console.log();
console.log("Question no 24");
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
//comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
var colour = "Maroon";
console.log("Is colour equal to Maroon? I predict true");
console.log(colour == "Maroon");
console.log("Is colour not equal to Maroon? I predict true");
console.log(colour != "Blue");
var car = "Lamborghini";
console.log("Is car equal to lamborghini? I predict false");
console.log(car == "lamborghini");
console.log("Is car not equal to Lamborghini? I predict false");
console.log(car != "Lamborghini");
// • Tests using the lower case function
var fruit2 = "pineapple";
console.log("Is pineapple lowecase? I predict true");
console.log(fruit2 === fruit2.toLowerCase());
var text = "Hello World";
console.log("Is Hello World lowecase? I predict false");
console.log(text === text.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 5;
var number3 = 20;
var number4 = 19;
console.log("Is 10 is equal to 5? I predict false");
console.log(number1 == number2);
console.log("Is 10 not equal to 5 ? I predict true");
console.log(number1 != number2);
console.log("Is 20 is equal to 19? I predict false");
console.log(number3 == number4);
console.log("Is 20 not equal to 19 ? I predict true");
console.log(number3 != number4);
console.log("Is 10 is greater then 5? I predict true");
console.log(number1 > number2);
console.log("Is 10 is less then 5? I predict false");
console.log(number1 < number2);
console.log("Is 20 is greater then 19? I predict true");
console.log(number3 > number4);
console.log("Is 20 is less then 19? I predict false");
console.log(number3 < number4);
console.log("Is 10 is greater then equal to 5? I predict true");
console.log(number1 >= number2);
console.log("Is 10 is less then equal to 5? I predict false");
console.log(number1 <= number2);
console.log("Is 20 is greater then equal to 19? I predict true");
console.log(number3 >= number4);
console.log("Is 20 is less then equal to 19? I predict false");
console.log(number3 <= number4);
// .Tests using "and" and "or" operators
var iscold = true;
var iswarm = false;
var isMale = true;
var isFemale = false;
console.log("Is it cold and warm? I predict false");
console.log(iscold && iswarm);
console.log("Is it cold or warm? I predict true");
console.log(iscold || iswarm);
console.log("Is Male and Female? I predict false");
console.log(isMale && isFemale);
console.log("Is Male or Female? I predict true");
console.log(isMale || isFemale);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'pear' in the fruits array? I predict False.");
console.log(fruits.includes('pear'));
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));
// Test whether an item is not in an array
var pastelColors = ["Sky Blue", "Dusty Pink", "Lavender"];
console.log("Is 'Magic Mint' not in the array? I predict true.");
console.log(!pastelColors.includes('Magic Mint'));
console.log("Is 'Dusty Pink' not in the array? I predict false.");
console.log(!pastelColors.includes('Dusty Pink'));
console.log();
console.log("Question no 25");
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a 
// value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just 
// earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will
//      have no output.)
var alien_color = "green";
if (alien_color === "green") {
    console.log("Great job!,You just earned five points");
}
var $alien_color = "yellow";
if ($alien_color === "green") {
    console.log("Great job! you just earned five points");
}
console.log();
console.log("Question no 26");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var aliencolor = "green";
if (alien_color === "green") {
    console.log("Great job!, You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points.");
}
var aliencolor2 = "red";
if (aliencolor2 === "green") {
    console.log("Great job!, You just earned 5 points by shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
console.log();
console.log("Question no 27");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_Color = 'green';
if (alien_Color === 'green') {
    console.log("Bravo! you just earned 5 points");
}
else if (alien_Color === 'yellow') {
    console.log("Bravo! you just earned 10 points");
}
else if (alien_Color === 'red') {
    console.log("Bravo! you just earned 15 points");
}
else {
    console.log("Unrecognized, alien color");
}
var alien_Color2 = 'yellow';
if (alien_Color2 === 'green') {
    console.log("Bravo! you just earned 5 points");
}
else if (alien_Color2 === 'yellow') {
    console.log("Bravo! you just earned 10 points");
}
else if (alien_Color2 === 'red') {
    console.log("Bravo! you just earned 15 points");
}
else {
    console.log("Unrecognized, alien color");
}
var alien_Color3 = 'red';
if (alien_Color3 === 'green') {
    console.log("Bravo! you just earned 5 points");
}
else if (alien_Color3 === 'yellow') {
    console.log("Bravo! you just earned 10 points");
}
else if (alien_Color3 === 'red') {
    console.log("Bravo! you just earned 15 points");
}
else {
    console.log("Unrecognized, alien color");
}
console.log();
console.log("Question no 28");
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var _personsAge = 78;
if (_personsAge < 2) {
    console.log("This person is a baby.");
}
else if (_personsAge >= 2 && _personsAge < 4) {
    console.log("This person is a toddler.");
}
else if (_personsAge >= 4 && _personsAge < 13) {
    console.log("This person is a kid.");
}
else if (_personsAge >= 13 && _personsAge < 20) {
    console.log("This person is a teenager");
}
else if (_personsAge >= 20 && _personsAge < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is an elder.");
}
console.log();
console.log("Question no 29");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check 
//for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your 
//array, the if block should print a statement, such as You really like bananas!
var favourate_fruits = ["Avacado", "Strawberry", "Blueberry"];
if (favourate_fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
if (favourate_fruits.includes("Raspberry")) {
    console.log("You really like Raspberries!");
}
if (favourate_fruits.includes("Avacado")) {
    console.log("You really like Avacados!");
}
if (favourate_fruits.includes("Strawberry")) {
    console.log("You really like Strawberries!");
}
if (favourate_fruits.includes("Blueberry")) {
    console.log("You really like Blueberries!");
}
;
console.log();
console.log("Question no 30");
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a 
// greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames = ["Sana", "Admin", "Nancy", "Mike", "Dustin"];
for (var _p = 0, userNames_1 = userNames; _p < userNames_1.length; _p++) {
    var name_6 = userNames_1[_p];
    if (name_6 === "Admin") {
        console.log("Hello ".concat(name_6, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(name_6, ", thank you for logging in again."));
    }
}
console.log();
console.log("Question no 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var user_Names = ["Sana", "Admin", "Nancy", "Mike", "Dustin"];
if (user_Names.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _q = 0, user_Names_1 = user_Names; _q < user_Names_1.length; _q++) {
        var name_7 = user_Names_1[_q];
        if (name_7 === "Admin") {
            console.log("Hello ".concat(name_7, ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(name_7, ", thank you for logging in again."));
        }
    }
}
// remove users from array
user_Names = [];
if (user_Names.length === 0) {
    console.log("We need to find some users!");
}
console.log();
console.log("Question no 32");
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need 
// to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Beverley", "Ben", "Bill", "Josh", "Mia"];
var new_users = ["Henry", "Peter", "Ben", "Daisy", "JOSH"];
var lowerCaseCurrentUsers = current_users.map(function (username) { return username.toLowerCase(); });
for (var _r = 0, new_users_1 = new_users; _r < new_users_1.length; _r++) {
    var users = new_users_1[_r];
    var lowerCaseUsername = users.toLowerCase();
    if (lowerCaseCurrentUsers.includes(lowerCaseUsername)) {
        console.log("The username \"".concat(users, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(users, " is available."));
    }
}
console.log();
console.log("Question no 33");
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end 
// in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//0,1,2,3,4,5,6,7,8
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var _s = 0, Numbers_1 = Numbers; _s < Numbers_1.length; _s++) {
    var number = Numbers_1[_s];
    var ordinalending = void 0;
    if (number === 1) {
        ordinalending = "st";
    }
    else if (number === 2) {
        ordinalending = "nd";
    }
    else if (number === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(number).concat(ordinalending));
}
console.log();
console.log("Question no 34");
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for 
// loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should
//  consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really 
//  love pizza!
var favouratePizza = ["Pepperoni", "Margherita", "Italian", "Barbecue"];
for (var _t = 0, favouratePizza_1 = favouratePizza; _t < favouratePizza_1.length; _t++) {
    var name_8 = favouratePizza_1[_t];
    console.log("I like ".concat(name_8, " pizza"));
}
console.log("Pizza is my favourate food.No matter wherever I go I always eat Pizza");
console.log();
console.log("Question no 35");
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence 
// such as Any of these animals would make a great pet!
var animals = ["Dog", "Cat", "Parrot"];
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("\nThese animals have a common characteristic: They are Popular and Interactive choices for Pets.\nAny of these animals would make a great pet!");
console.log();
console.log("Question no 36");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
// printed on it. Call the function.
function make_shirt(shirtSize, printTextOnShirt) {
    console.log("The size of the T-shirt is: ".concat(shirtSize, " and the printed message on shirt is: \"").concat(printTextOnShirt, "\""));
}
make_shirt("Medium", "The earth is flat.");
console.log();
console.log("Question no 37");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
// a different message.
function make_shirt2(shirtSize, printTextOnShirt) {
    if (shirtSize === void 0) { shirtSize = "Large"; }
    if (printTextOnShirt === void 0) { printTextOnShirt = "I love typescript"; }
    console.log("The the size of the T-shirt is: ".concat(shirtSize, ", Message would be print on it is: \"").concat(printTextOnShirt, "\"."));
}
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "I love coding");
console.log();
console.log("Question no 38");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not 
// in the default country.
function describe_city(cityName, itsCountry) {
    if (itsCountry === void 0) { itsCountry = "France"; }
    console.log("".concat(cityName, " is in ").concat(itsCountry, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("Rome", "Italy");
describe_city("Paris");
console.log();
console.log("Question no 39");
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = city_country("Seoul", "Korea");
var city2 = city_country("Berlin", "Germany");
var city3 = city_country("Newyork", "America");
console.log(city1);
console.log(city2);
console.log(city3);
console.log();
console.log("Question no 40");
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take
//  in an artist name and an album title, and it should return a Object containing these two pieces of information. Use 
//  the function to make three dictionaries representing different albums. Print each return value to show that Objects
//   are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the
//    number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the 
//    album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Taylor Swift", "1989");
var album2 = make_album("BlackPink", "BlackPink In Your Area", 14);
var album3 = make_album("Rihana", "Teenage Dream", 3);
console.log(album1);
console.log(album2);
console.log(album3);
console.log();
console.log("Question no 41");
// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
// string[] is used to indicate the expected data type of elements within an array, 
// providing type safety and clarity in your code.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_9 = magicians_1[_i];
        console.log(name_9);
    }
}
var magicianNames = ["David Copperfield", "Criss Angel", "Penn & Teller", "Derren Brown"];
show_magicians(magicianNames);
console.log();
console.log("Question no 42");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.
function show_magicians1(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var name_10 = magicians_2[_i];
        console.log(name_10);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var magicianNames1 = ["Criss Angel", "Penn & Teller", "Darren Brown", "Criss Angel"];
var greatMagiciansName = make_great(magicianNames1);
show_magicians(greatMagiciansName);
console.log();
console.log("Question no 43");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
// separate array. Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.
function $show_magicians(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
// So, the line const greatMagicians: string[] = []; is creating an empty array called greatMagicians that will later be used to
//  store the names of magicians with "the Great" added to them. It's a starting point before any magician names are added to it 
//  through the make_great() function
function $make_great(originalMagicians) {
    var greatMagicians = [];
    for (var _i = 0, originalMagicians_1 = originalMagicians; _i < originalMagicians_1.length; _i++) {
        var magician = originalMagicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var magicians = ["Lance Burton", "Doug Henning", "Helder Guimarães", "David Blaine"];
var greatMagicians = $make_great(__spreadArray([], magicians, true)); // Create a copy of the original array
console.log("Original Magicians:");
$show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
console.log();
console.log("Question no 44");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, using a 
//  different number of arguments each time.
// function makeSandwich(...ingredients: string[]): void {
//     console.log("Here's your sandwich with the following ingredients:");
//     for (const ingredient of ingredients) {
//         console.log("- " + ingredient);
//     }
//     console.log("Enjoy your sandwich!");
// }
// makeSandwich("Ham", "Cheese", "Lettuce");
// makeSandwich("Turkey", "Tomato", "Mayo", "Mustard");
// makeSandwich("Peanut Butter", "Jelly");
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Here's your sandwich with the following ingrediants:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var items = ingredients_1[_a];
        console.log("- " + items);
    }
    console.log("Enjoy your sandwich!");
}
makeSandwich("Chicken", "Cheese", "Lettuce");
makeSandwich("Beef", "Cheese", "Cucumber", "Coleslaw");
makeSandwich("Peanut Butter", "Jam");
console.log();
console.log("Question no 45");
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
//  name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
//   name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored
//    correctly.
// Imagine you're making a car and you want to keep track of its color and special features. But sometimes, people might not tell you the 
// color or features they want.
//  So, you want to set default values in case they don't specify.
// color: color || "Unknown": This means, if someone tells you the color of the car, you'll use that color. But if they don't tell yo
// u the color, you'll use "Unknown" as the default color.
// feature: feature || "None": Similarly, if someone tells you about a special feature for the car, you'll use that. But if they don't 
// mention any features, you'll use "None" as the default.
// So, these lines make sure your car's color and features are set to real values if provided, and if not, they have sensible defaults like 
// "Unknown" and "None" so that your car's information always makes sense.
function cars(manufacturer, model, color, feature) {
    var carDetails = {
        manufacturer: manufacturer,
        model: model,
        color: color || "Unknown",
        feature: feature || "None",
    };
    return carDetails;
}
var car1 = cars("Honda", "Civic", "Silver");
var car2 = cars("Rangerover", "Evoque", "Black", "Luxury Interior");
var car3 = cars("Lamborghini", "Gallardo", undefined, "Powerfull Engine");
console.log(car1);
console.log(car2);
console.log(car3);
