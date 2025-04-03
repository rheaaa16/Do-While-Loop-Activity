//a variable that store the password
let password = "gascon1214llanes19rina"

do {

     let p_word = prompt("Enter your password: ");

     if (p_word === password) {
        alert("Access Granted.");
        break;
     } else {
        alert("Incorrect, try again.");
     }
} while (true);
