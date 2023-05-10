window.onload = function() {
    let x = +prompt("Įveskite pirmą skaičių");
    let y = +prompt("Įveskite antrą skaičių");

    if (x > y) {
        alert("-1");
    } else if (x < y) {
        alert("1");
    }
    else {
        alert("0");
    }
}
