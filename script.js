// Laminatas
function calcLaminatas() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let pakuote = parseFloat(document.getElementById("pakuote").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (!plotas || !pakuote || !kaina) {
        document.getElementById("rezultatas").innerHTML = "Įvesk visus duomenis.";
        return;
    }

    let kiekis = Math.ceil(plotas / pakuote);
    let suma = kiekis * kaina;

    document.getElementById("rezultatas").innerHTML =
        "Reikės <b>" + kiekis + "</b> pakuočių. Kaina: <b>" + suma.toFixed(2) + " €</b>";
}

// Plytelės
function calcPlyteles() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let deze = parseFloat(document.getElementById("deze").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (!plotas || !deze || !kaina) {
        document.getElementById("rezultatas").innerHTML = "Įvesk visus duomenis.";
        return;
    }

    let kiekis = Math.ceil(plotas / deze);
    let suma = kiekis * kaina;

    document.getElementById("rezultatas").innerHTML =
        "Reikės <b>" + kiekis + "</b> dėžių. Kaina: <b>" + suma.toFixed(2) + " €</b>";
}

// Dažai
function calcDazai() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let iseiga = parseFloat(document.getElementById("iseiga").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (!plotas || !iseiga || !kaina) {
        document.getElementById("rezultatas").innerHTML = "Įvesk visus duomenis.";
        return;
    }

    let litrai = Math.ceil(plotas / iseiga);
    let suma = litrai * kaina;

    document.getElementById("rezultatas").innerHTML =
        "Reikės <b>" + litrai + "</b> litrų. Kaina: <b>" + suma.toFixed(2) + " €</b>";
}

// Gipsas
function calcGipsas() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let lapas = parseFloat(document.getElementById("lapas").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (!plotas || !lapas || !kaina) {
        document.getElementById("rezultatas").innerHTML = "Įvesk visus duomenis.";
        return;
    }

    let kiekis = Math.ceil(plotas / lapas);
    let suma = kiekis * kaina;

    document.getElementById("rezultatas").innerHTML =
        "Reikės <b>" + kiekis + "</b> lapų. Kaina: <b>" + suma.toFixed(2) + " €</b>";
}

// Kontaktų forma
function siustiUzklausa() {
    let vardas = document.getElementById("vardas").value;
    let tel = document.getElementById("tel").value;
    let uzklausa = document.getElementById("uzklausa").value;

    if (!vardas || !tel || !uzklausa) {
        document.getElementById("form-rez").innerHTML = "Užpildyk visus laukus.";
        return;
    }

    document.getElementById("form-rez").innerHTML =
        "Užklausa išsiųsta. Susisieksime.";
}
