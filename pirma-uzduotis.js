window.onload = function() {
    let x = +prompt("Įveskite skaičių");
    alert("Įvestas skaičius lyginis: " + arSkaiciusLyginis(x));
}

function arSkaiciusLyginis(skaicius) {
    return skaicius % 2 == 0;
}