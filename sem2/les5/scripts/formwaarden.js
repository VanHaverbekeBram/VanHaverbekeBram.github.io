const setup = () => {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", printResultaat);
}

const printResultaat = () => {
    let roker = document.getElementById("roker");
    if (roker.checked){
        console.log("Is een roker");
    }else {
        console.log("Is geen roker");
    }
    let talen = document.getElementsByName("taal");
    talen.forEach(taal => {
        if (taal.checked){
            console.log(`Moedertaal is: ${taal.value}`);
        }
    });
    let landen = document.getElementById("land");
    let option = landen.options[landen.selectedIndex];
    console.log(`Favoriete land is: ${option.textContent}`);

    let order = document.getElementById("bestelling");
    let selected = [];
    Array.from(order.options).forEach(el => {
        if (el.selected){
            selected.push(el.value);
        }
    });
    console.log(`Bestelling is: ${selected.join(', ')}`);
    //let bruh = order.options[order.selectedIndex];
    //console.log(`Bestelling is: ${bruh.textContent}`);
}

window.addEventListener("load", setup);