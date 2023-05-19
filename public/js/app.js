⁡⁣⁢⁢// //////////////////exercise 1////////////////////////////////////////////
// - Create a class variable with an array
//      - Using a prompt, choose the maximum number of students in the class
//      - Using a while loop, insert students into the class until the class is full

⁡⁢⁣⁣////////////////////////correction : ///////////////////////////// 
⁡
// ⁡⁢⁢⁢- Create a class variable with an array
// In JavaScript, variables are containers for storing data values. A class variable is a variable that belongs to a class. An array is a type of variable that can hold multiple values in a single variable. To create a class variable with an array in JavaScript, you can use the following code:
⁡
let classArray = [];

// ⁡⁢⁢⁢- Using a prompt, choose the maximum number of students in the class
// The prompt function in JavaScript is used to display a dialog box that allows the user to enter input. To use prompt in this example, you can use the following code:
⁡
let maxStudents = prompt("What is the maximum number of students in the class?");

// ⁡⁢⁢⁢- Using a while loop, insert students into the class until the class is full
// A while loop is a control flow statement that allows you to repeat a block of code as long as a specified condition is true. In this case, we want to insert students into the class until the class is full.
⁡
let i = 0; // set i to 0 to use as a counter

while (i < maxStudents) { // while i is less than maxStudents
  let studentName = prompt("Enter the name of a student to add to the class:");
  classArray.push(studentName); // add the student to the classArray
  i++; // increment the counter
}
⁡⁢⁢⁢
// This code sets   i   to 0 to be used as a counter, and then enters a while loop. The loop will continue to run as long as   i   is less than   maxStudents  . Inside the loop, the code prompts the user to enter the name of a student, adds the student to the   classArray   using the   push   method, and then increments the counter (  i++  ). Once the counter reaches   maxStudents  , the loop will stop running.

// So, putting it all together, the code would look something like this:⁡

let classArray = [];
let maxStudents = prompt("What is the maximum number of students in the class?");
let i = 0;

while (i < maxStudents) {
  let studentName = prompt("Enter the name of a student to add to the class:");
  classArray.push(studentName);
  i++;
}

// ⁡⁢⁢⁢This code creates an empty array   classArray  , prompts the user for the maximum number of students in the class, enters a while loop to add students to the class until the class is full, and then outputs the list of students in the class.⁡



// ⁡⁢⁣⁢ EXO 2 : /
//! Part 1:
// let classe = [];
// let maxNum = parseInt(prompt("Choose a maximum number of students that you will add to the class: "));

// while (classe.length < maxNum) {
//     let student = prompt("Add a student:")
//     classe.push(student);
// }

// console.log(classe);

//! Part 2:

// let classe = [`Mohamed` , `Oussama` , `Ayoub` , `Said` , `Meryem` , `Mahdi` , `Charaf` , `Moussa` , `Hiba`];

// let i = 0;
// while (i < classe.length) {
//     console.log(`Bonjour ${classe[i]}`);
//     i++;
// }

//! Part 3:

let fruits = ["Banana", "Ananas", "Mango", "Watermelon","strawberry", "l3neb"];

console.log(fruits);
while (fruits.length > 0) {
    fruits.shift(); // pour supprimer la premiere element du tableau
    // fruits.pop(); pour suprimmer la derinier element du tableau
    console.log(fruits);
}

///* exo 4
// let panierLegumes = ["carrot", "broccoli", "tomato", "potato"];
// let caisselegume = [];
// let longeur  = panierLegumes.length; // equivalant a  longeur = 4
// while (longeur> 0) {

//     caisselegume.push(panierLegumes.shift());
//     longeur--
// }
// console.log(panierLegumes);
// console.log(caisselegume);
//* exo 5 
// let answerEnigme = 4;
// let askEnigme =parseInt( prompt('2 * 2 = ?'));

// while (askEnigme != answerEnigme) {
//  askEnigme =parseInt( prompt('2 * 2 = ?'));
// }
// alert(` congrats`);

//* exo-6
// let panierLegumes = ["carrot", "broccoli", "tomato", "potato"];
// let caisselegume = [];
// do {
//     caisselegume.push(panierLegumes.pop());
// } while (panierLegumes.length > 0);

// console.log(caisselegume);
// console.log(panierLegumes);
//* exo -7 

// let currentYear = new Date().getFullYear();
// let generateRandomYear = Math.round((Math.random() * (2018 - 1970)) + 1970);
// let askAge = parseInt(prompt(`if i was born in ${generateRandomYear} how old am i ?`));
// let answer = currentYear - generateRandomYear;
// let essai = 3; 
// while (askAge != answer && essai > 0) {
//     askAge = parseInt(prompt(`if i was born in ${generateRandomYear} how old am i you still have ${essai} tries ?`));
//     essai--
// }
// if (essai == 0) {
//     alert(` try again later`)
// }else{
//     alert(`congrats`)
// }

let tabFruits = [];

while (tabFruits.length < 2) {
    let pushFruit = prompt(`Ajouter un fruit`);
    pushFruit = pushFruit.charAt(0).toUpperCase() + pushFruit.slice(1 , -1) + pushFruit.charAt(pushFruit.length-1).toUpperCase();
    tabFruits.push(pushFruit);
}

let showFruits = prompt(`Ecrivez le nom du fruit que vous voulez enlevez du tableau : ${tabFruits}`);

while (tabFruits.includes(showFruits)) {
    tabFruits.splice(tabFruits.indexOf(showFruits) , 1);
    showFruits = prompt(`Ecrivez le nom du fruit que vous voulez enlevez du tableau : ${tabFruits}`);
}
alert(`Merci Bon appétit`);
console.log(tabFruits);⁡