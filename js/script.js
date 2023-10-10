const create = document.getElementById('create');

create.addEventListener("click", function () {
    const name = document.getElementById('name').innerHTML;
    const km = document.getElementById('distance').innerHTML;
    const age = document.getElementById('age').value;

    if (name === undefined || km === undefined || age === "") {
        console.log('si prega di compilare tutti i campi');
        return
    }

});