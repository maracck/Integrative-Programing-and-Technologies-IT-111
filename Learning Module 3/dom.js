function changeparagraph() {
    let newParagraph = prompt("Enter new data or type in random to generate random: ");

    if ((newParagraph!== "" && newParagraph !== null) && newParagraph.trim() == "random"){
        newParagraph = makeRandomSen();
        document.getElementById("changeThis").innerHTML = newParagraph;

    } else if (newParagraph!== "" && newParagraph !== null) {
        document.getElementById("changeThis").innerHTML = newParagraph;
    } else if (newParagraph == ""){
        document.getElementById("changeThis").innerHTML = "Hmmmm, You pressed 'Ok' without typing anything?!?!?!?!"
    } else {
        document.getElementById("changeThis").innerHTML = "Changing this to... failed, Because you pressed 'Cancel'."
    }
}

function randomButton() {
    newParagraph = makeRandomSen();
    document.getElementById("changeThis").innerHTML = newParagraph;
}

function makeRandomSen() {
    const subjects = ['The cat', 'A scientist', 'My friend Marc', 'The programmer', 'Paul', 'Meynard', 'Ivan', 'John Carl', 'Keziah' ];
    const verbs = ['jumps', 'writes', 'discovers', 'eats', 'analyzes', 'steal', 'create', 'squash', 'Meows', 'takes', 'buys'];
    const objects = ['a book', 'the moon', 'a burger', 'a new theory', 'a mysterious code', 'a bike', 'a house', 'a pen'];

    return `${subjects[Math.floor(Math.random() * subjects.length)]} 
            ${verbs[Math.floor(Math.random() * verbs.length)]} 
            ${objects[Math.floor(Math.random() * objects.length)]}.`;
}