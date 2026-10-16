
function calcLaminatas() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let pakuote = parseFloat(document.getElementById("pakuote").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (plotas > 0 && pakuote > 0 && kaina > 0) {
        let kiekis = Math.ceil(plotas / pakuote);
        let suma = kiekis * kaina;

        document.getElementById("rezultatas").innerText =
            "Reikės " + kiekis + " pakuočių. Kaina: " + suma.toFixed(2) + " €";
    }
}

function calcPlyteles() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let deze = parseFloat(document.getElementById("deze").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (plotas > 0 && deze > 0 && kaina > 0) {
        let kiekis = Math.ceil(plotas / deze);
        let suma = kiekis * kaina;

        document.getElementById("rezultatas").innerText =
            "Reikės " + kiekis + " dėžių. Kaina: " + suma.toFixed(2) + " €";
    }
}

function calcDazai() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let iseiga = parseFloat(document.getElementById("iseiga").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (plotas > 0 && iseiga > 0 && kaina > 0) {
        let litrai = plotas / iseiga;
        let suma = litrai * kaina;

        document.getElementById("rezultatas").innerText =
            "Reikės " + litrai.toFixed(1) + " litrų. Kaina: " + suma.toFixed(2) + " €";
    }
}

function calcGipsas() {
    let plotas = parseFloat(document.getElementById("plotas").value);
    let lapas = parseFloat(document.getElementById("lapas").value);
    let kaina = parseFloat(document.getElementById("kaina").value);

    if (plotas > 0 && lapas > 0 && kaina > 0) {
        let kiekis = Math.ceil(plotas / lapas);
        let suma = kiekis * kaina;

        document.getElementById("rezultatas").innerText =
            "Reikės " + kiekis + " lapų. Kaina: " + suma.toFixed(2) + " €";
    }
}
