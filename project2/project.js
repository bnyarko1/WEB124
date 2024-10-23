// Name: [Benjamin Nyarko  10/18/20024]

// Initialize string variable with your full name
var myName = "Benjamin Nyarko";

// Get the first paragraph element and set its content to your name
var para1 = document.getElementById("p1");
para1.textContent = myName;

// Initialize two number variables with desired values
var n1 = 5;
var n2 = 10;

// Add the two numbers and set the content of the second paragraph
var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// Multiply the two numbers and set the content of the third paragraph
var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// Add a number to the string and set the content of the fourth paragraph
var myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// Multiply a number with the string and set the content of the fifth paragraph
var myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

// Compare your age with the multiplication result and set the content of the sixth paragraph
var age = 30; // You can use a realistic value for your age
var ageCompare = age > numberMult;
document.getElementById("p6").textContent = ageCompare;

