const create = document.getElementById('create');
const reset = document.getElementById('reset');
const download = document.getElementById('download');

const errorBox = document.getElementById('errorBox');


/**
 * input control
 */
create.addEventListener("click", function () {
    const euroKm = 0.21;
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
    //name checking => name and surname must have at least one space between, name and surname must be at least 1 letter

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

/**
 * resetter for values
 */
reset.addEventListener("click", function () {

    document.getElementById('name').value = "";
    document.getElementById('distance').value = "";
    document.getElementById('age').value = "";

    //output reset
    document.getElementById('errorBox').classList.add("d-none");
    document.getElementById('outputBox').classList.add("d-none");
});



/**
 * download triggerer
 */
download.addEventListener("click", function () {
    const card = document.getElementById('outCard');
    //if display is visible
    const ticket = document.getElementById('outputBox');

    if (window.getComputedStyle(ticket).display !== "none") {
        canvasCreaterTriggerer(card);
    } else {
        errorBox.textContent = 'non puoi scaricare il biglietto dato che non è stato ancora generato';
        errorBox.classList.remove("d-none");
    }

});


/**
 * given a canvas item it create a canvas to parse data and download jpg
 * @param {*} element 
 */
function canvasCreaterTriggerer(element) {
    //if the promise is success creates a canvas with element (sintax external)
    html2canvas(element).then(canvas => {
        // Convert the canvas to a data URL representing a JPEG image
        const dataURL = canvas.toDataURL('image/jpeg');

        // Create a link element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL; //giving the url I want triggered
        downloadLink.download = 'biglietto.jpg';

        // Creating and removing in the document the element to trigger 
        document.body.appendChild(downloadLink);
        downloadLink.click(); // triggering the url
        document.body.removeChild(downloadLink);
    });
}