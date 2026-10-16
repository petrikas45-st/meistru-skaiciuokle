function skaiciuotiLaminata() {
    const plotas = parseFloat(document.getElementById('lam_plotas').value);
    const pakuote = parseFloat(document.getElementById('lam_pakuote').value);
    const atsarga = parseFloat(document.getElementById('lam_atsarga').value);

    const kiekis = plotas / pakuote;
    const suAtsarga = kiekis * (1 + atsarga / 100);

    document.getElementById('lam_rez').innerText =
        'Reikės pakuočių: ' + Math.ceil(suAtsarga);
}

function skaiciuotiDazus() {
    const plotas = parseFloat(document.getElementById('daz_plotas').value);
    const sanaudos = parseFloat(document.getElementById('daz_sanaudos').value);
    const atsarga = parseFloat(document.getElementById('daz_atsarga').value);

    const kiekis = plotas * sanaudos;
    const suAtsarga = kiekis * (1 + atsarga / 100);

    document.getElementById('daz_rez').innerText =
        'Reikės dažų: ' + suAtsarga.toFixed(1) + ' l.';
}

function skaiciuotiGipsa() {
    const plotas = parseFloat(document.getElementById('gip_plotas').value);
    const plokste = parseFloat(document.getElementById('gip_plokste').value);
    const atsarga = parseFloat(document.getElementById('gip_atsarga').value);

    const kiekis = plotas / plokste;
    const suAtsarga = kiekis * (1 + atsarga / 100);

    document.getElementById('gip_rez').innerText =
        'Reikės plokščių: ' + Math.ceil(suAtsarga);
}

function skaiciuotiPlyteles() {
    const plotas = parseFloat(document.getElementById('ply_plotas').value);
    const ilgis = parseFloat(document.getElementById('ply_ilgis').value);
    const plotis = parseFloat(document.getElementById('ply_plotis').value);
    const atsarga = parseFloat(document.getElementById('ply_atsarga').value);

    const dydis = (ilgis / 100) * (plotis / 100);
    const kiekis = plotas / dydis;
    const suAtsarga = kiekis * (1 + atsarga / 100);

    document.getElementById('ply_rez').innerText =
        'Reikės plytelių: ' + Math.ceil(suAtsarga);
}
