window.onload = function() {
    let a = +prompt("Įveskite kraštinę a");
    let b = +prompt("Įveskite kraštinę b");
    let c = +prompt("Įveskite kraštinę c");
    let atsakymas = arTrikampisYraStatusis (a, b, c);
}
    
    function arTrikampisYraStatusis (a, b, c) {
    if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
        console.log("true");
    }
    else if (Math.pow(c, 2) != Math.pow(a, 2) + Math.pow(b, 2)) {
        console.log("false");
    }
    }