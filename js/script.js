const create = document.getElementById('create');

create.addEventListener("click", function () {
    const euroKm = 0.21;
    const errorBox = document.getElementById('errorBox');
    const outputBox = document.getElementById('outputBox');
    const name = document.getElementById('name').value;
    let trname = name.trim();
    let km = document.getElementById('distance').value;
    const age = document.getElementById('age').value;
    let dCoefficient = 1;
    let price;

    if (name === "" || km === "" || age === "") {
        outputBox.classList.add("d-none");
        errorBox.textContent = 'si prega di compilare tutti i campi';
        errorBox.classList.remove("d-none");

        return;
    }
    //name checking => name and surname muist have at least one space between, name and surname must be at least 1 letter

    if ((trname.length === trname.replaceAll(/\s/g, "").length) || trname.replaceAll(/\s/g, "").length < 2) {
        outputBox.classList.add("d-none");
        errorBox.textContent = 'scrivere sia il nome che cognome separati';
        errorBox.classList.remove("d-none");
        return;
    }

    //km checking
    if (isNaN(km) || km < 1) {
        outputBox.classList.add("d-none");
        errorBox.textContent = 'scrivere un numero valido nel campo km';
        errorBox.classList.remove("d-none");
        return;
    }

    // discount applier
    if (age === 'minore') {
        dCoefficient = 0.8;
    } else if (age === 'anziano') {
        dCoefficient = 0.6;
    }

    //calculating price
    price = (dCoefficient * km) * euroKm;

    //output
    console.log(`prezzo ${price.toFixed(2)}`);

    document.getElementById('output-name').innerHTML = name;
    document.getElementById('output-offer').innerHTML = age;
    document.getElementById('output-rnd-wagon').innerHTML = rndInt(1, 9);
    document.getElementById('output-rnd-CP').innerHTML = rndInt(10000, 99999);
    document.getElementById('output-price').innerHTML = price.toFixed(2) + " €";

    errorBox.classList.add("d-none");
    outputBox.classList.remove("d-none");
});

/**
 * takes two integers, return a random value between them (included)
 * 
 * @param {*} min Int, min value
 * @param {*} max Int, max value
 * @returns random
 */
function rndInt(min, max) {
    return (Math.floor(Math.random() * (max + 1 - min)) + min);
}