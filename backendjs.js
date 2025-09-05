function Add() {
    const data = {
        name: document.getElementById("name").value,
        settlement: document.getElementById("settlement").value,
        number: document.getElementById("number").value,
        region: document.getElementById("region").value,
        housenumber: document.getElementById("housenumber").value
    };

    localStorage.setItem("userData", JSON.stringify(data));
}

function Display() {
    const display = document.getElementById("display");
    const stored = localStorage.getItem("userData");

    if (stored) {
        const data = JSON.parse(stored);
        display.innerHTML = `
        <strong>Név:</strong> ${data.name}<br>
        <strong>Település:</strong> ${data.settlement}<br>
        <strong>Irányítószám:</strong> ${data.number}<br>
        <strong>Közterület:</strong> ${data.region}<br>
        <strong>Házszám:</strong> ${data.housenumber}
    `;
    } else {
        display.innerHTML = "Nincs adat (NA)";
    }
}

function Delete() {
    localStorage.removeItem("userData");
    document.getElementById("display").innerHTML = "Nincs adat (NA)";
}