const setup = () => {
    let knop = document.getElementById("bereken");
    knop.addEventListener("click", bereken);
}
const bereken = () => {
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let tot = 0;
    for (let i = 0; i < prijs.length; i++) {
        let prijsNumber = parseFloat(prijs[i].textContent);
        let procent = parseInt(btw[i].textContent);
        subtotaal[i].textContent = (prijsNumber * aantal[i].value * (1 + procent / 100)).toFixed(2) + " Eur";
        tot += parseFloat(subtotaal[i].textContent);
    }
    totaal.textContent = tot.toFixed(2) + " Eur";
}






addEventListener("load",setup);