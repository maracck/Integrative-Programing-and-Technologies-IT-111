console.log("Hello, World!");
let name = "Marc Paul R. Cambronero";
console.log("Welcome, " + name);


function updateConsoleGreetinng() {
    let firstName = document.getElementById("fname");
    let lastname = document.getElementById("lname");

    //console.log(firstName.value);

    let Student = firstName.value + " " + lastname.value;
    const greetingMessage = " Hello!. Welcome, ";

    console.log(greetingMessage + Student);
}