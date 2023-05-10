window.onload = function() {
    let x = +prompt("Įveskite skaičių");
    alert("Įvestas Skaičius yra trejeto kartotinis: " + arSkaiciusYraTrejetoKartotinis(x));
}

function arSkaiciusYraTrejetoKartotinis(skaicius) {
    return skaicius % 3 == 0;
}