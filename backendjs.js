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

function Display(){
    localStorage.getItem()
}
