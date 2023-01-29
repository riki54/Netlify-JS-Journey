// document.getElementById("count-el").innerText = 5;

// let count = 5;

// count = count + 2;
// count = count + 10;
// count = count - 2;

// console.log(count);

// // we are setting the variable of firstBatch and secondBatch
// let firstBatch = 5;
// let secondBatch = 7;

// //  Here we set the variable of the count that will add the firstBatch and secondBatch

// let count = firstBatch + secondBatch;
// // here we console the variable of the count which is adding the two variable firstBatch and secondBatch
// console.log(count);

// challenge from scrimba #1

// let myAge = 23;
// console.log(myAge);
// challenge from scrimba #2
// let myAge = 23;
// let humanDogRation = 7;

// let myDogAge = myAge * humanDogRation;

// console.log(myDogAge);

// challenge from scrimba #3

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 25;
// bonusPoints = bonusPoints + 75;
// console.log(bonusPoints);

// intialize the count as 0
// listen for clicks on the increment button
// change the count-el in the HTML to reflect the new count

// function increment() {

// }
// Setting up the the race 🏎 🏎 🏎

// function placeNumber() {
//   console.log("logging out the number " + 42);
// }
// placeNumber();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function totalLapTime() {
//   console.log(lap1 + lap2 + lap3);
// }
// totalLapTime();
// let lapsCompleted = 0;

// function lapsIncrement() {
//   lapsCompleted = lapsCompleted + 1;
//   console.log(" You Completed Lap " + lapsCompleted);
// }
// lapsIncrement();
// lapsIncrement();
// lapsIncrement();
// let countEl = document.getElementById("count-el");
// let totalpep = document.getElementById("totalpep");
// let peopleEnter = 0;
// function increment() {
//   peopleEnter = peopleEnter + 1;
//   totalPeopleEnter = peopleEnter;
//   countEl.innerText = totalPeopleEnter;
//   totalpep.innerText = totalPeopleEnter;
//   console.log("People Enter in the subway + 1");
//   console.log(
//     "The total of the people who enter in the subway is now " + peopleEnter
//   );
// }
// grab the count-el element, store it in a countEl variable
// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }
// function save() {
//   console.log("Saving the data who enter the subway + " + count);
// }

// let notification = "You have tree new notifications";
// let message = "You have tree new notifications";
// let messageToUser = message;
// console.log(messageToUser);
// let username = "Ismael Bonga";
// let greeting = "Hi , ";
// let myGreeting = greeting + username;
// console.log(myGreeting);

// adding emoji to the text and code 👋
// let welcomeEl = document.getElementById("welcome-el");
// let name = "Ismael Bonga Welcome to my page";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// welcomeEl.innerText = myGreeting;

// welcomeEl.innerText += " 👋";
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}
