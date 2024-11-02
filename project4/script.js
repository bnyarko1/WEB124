// Benjamin Nyarko 11/2/2024
// Variable to store your full name
var fullName = "Benjamin Nyarko";
console.log("Full Name:", fullName);
document.getElementById("fullName").textContent = "Full Name: " + fullName;

// Variable to store your desired annual salary
var desiredSalary = 75000; 
console.log("Desired Annual Salary:", desiredSalary);
document.getElementById("desiredSalary").textContent = "Desired Annual Salary: $" + desiredSalary;

// Variable to store your veteran status
var isVeteran = false;
console.log("Veteran Status:", isVeteran);
document.getElementById("veteranStatus").textContent = "Veteran Status: " + (isVeteran ? "Veteran" : "Not a Veteran");

// Array to store the names of three of your friends
var friends = ["Shed Lamptey", "Micheal Boateng", "Ernest Agyei"];
console.log("Friends:", friends);
document.getElementById("friends").textContent = "Friends: " + friends.join(", ");

// Array to store the value of the desired annual salary for your three friends
var friendsSalaries = [190000, 120000, 240000]; // Replace with your friends' desired salaries
console.log("Friends' Desired Salaries:", friendsSalaries);
document.getElementById("friendsSalaries").textContent = "Friends' Desired Salaries: $" + friendsSalaries.join(", $");

// Literal object to store the first name, last name, and desired annual salary of yet another friend
var anotherFriend = {
    firstName: "Yaw",
    lastName: "Tete",
    desiredSalary: 180000 
};
console.log("Another Friend:", anotherFriend);
document.getElementById("anotherFriend").textContent = `Another Friend: ${anotherFriend.firstName} ${anotherFriend.lastName}, Desired Salary: $${anotherFriend.desiredSalary}`;
