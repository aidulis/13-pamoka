window.onload = function() {
    
}
    let x = +prompt("Įveskite skaičių x");
    let y = +prompt("Įveskite skaičių y");
    if ((x * y) > (x + y)) {
        console.log("true");
    }
    else if (x * y <= x + y) {
        console.log("false");
    }