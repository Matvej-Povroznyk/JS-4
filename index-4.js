"use strict";

/* --------- TASK 1 ---------- */
const field1 = confirm("Enter text to field1:");
const field2 = confirm("Enter text to field2:");

if (field1.length !== 0 && field2.length !== 0) alert("All fields are filled.");
else alert("Not all fields are filled.");

/* --------- TASK 2 ---------- */
const a = Number(prompt("Enter the first number (a):"));
const b = Number(prompt("Enter the second number (b):"));
const sum = a + b;

if (sum > 10) alert("The sum of the numbers is greater than 10.");
else alert("The sum of the numbers is less than or equal to 10.");

/* --------- TASK 3 ---------- */
const text = "JavaScript is awesome!";

if (text.toLowerCase().includes("javascript"))
  alert("The text contains 'JavaScript'.");
else alert("The text does not contain 'JavaScript'.");

/* --------- TASK 4 ---------- */
const number = Number(prompt("Enter a number:"));

if (number > 10 && number < 20)
  alert("The number is greater than 10 and less than 20.");
else alert("The number is not in the range (10, 20).");

/* --------- TASK 5 ---------- */
const userName = "Viktor";
const email = "viktor@example.com";
const password = "securePassword123";

if (userName.length >= 3 && email.includes("@") && password.length >= 6)
  alert("All inputs are valid.");
else alert("Some inputs are invalid.");
