
for (let i = 1; i <= 10; i++) {
    
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  
function selectRange() {
    let range = prompt("Enter a number: ");

    if ((range!== "" && range !== null) && !isNaN(range)){
        for (let i = 1; i <= range; i++) {
    
            if (i % 2 === 0) {
              console.log(i + " is even");
            } else {
              console.log(i + " is odd");
            }
        }
    } else if (range!== "" && range !== null) {
        console.log("Letters are not accepted")
    } else if (range == ""){
        console.log("Nothing is not a number");
    } else {
        console.log("Invalid input")
    }

}