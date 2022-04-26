let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAARTEN: ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"],
    OPEN_KAART1: null,
    OPEN_KAART2: null
};

const setup = () => {
    let start = document.createElement("button");
    start.id = "startBtn";
    start.textContent = "START";
    let speelveld = document.getElementById("speelveld");
    speelveld.appendChild(start);
    start.addEventListener("click", spelen);
};

const spelen = (event) => {
    event.target.hidden = true;
    plaatsKaarten();
    let kaarten = document.getElementsByClassName("kaart");
    for (let i = 0; i < kaarten.length; i++){
        kaarten[i].addEventListener("click",draaiOm);
    }
}

const draaiOm = (event) => {
    if (event.target !== global.OPEN_KAART1 && event.target !== global.OPEN_KAART2) {
        let kaart = event.target;
        if (global.OPEN_KAART1 === null) {
            global.OPEN_KAART1 = kaart;
            draai(kaart);
        }else if (global.OPEN_KAART2 === null) {
            global.OPEN_KAART2 = kaart;
            draai(kaart);
            if (global.OPEN_KAART2.id === global.OPEN_KAART1.id){
                juist();
               setTimeout(verwijder, 2000)
            }else {
                fout();
                setTimeout(draaiTerug, 2000);
            }
        }
    }
}

const draai = (kaart) => {
    let alt = kaart.alt;
    let src = kaart.src;
    kaart.src = alt;
    kaart.alt = src;
}

const verwijder = () => {
    global.OPEN_KAART1.remove();
    global.OPEN_KAART2.remove();
    global.OPEN_KAART1 = null;
    global.OPEN_KAART2 = null;
}

const draaiTerug = () => {
    draai(global.OPEN_KAART1);
    draai(global.OPEN_KAART2);
    global.OPEN_KAART1.style.border = "none";
    global.OPEN_KAART2.style.border = "none";
    global.OPEN_KAART1 = null;
    global.OPEN_KAART2 = null;
}
const plaatsKaarten = () =>{
    let lijst = global.KAARTEN.concat(global.KAARTEN);
    let col = 1;
    let row = 1;
    while (lijst.length > 0){
        let i = Math.floor(Math.random() * lijst.length);
        let kaart = document.createElement("img");
        kaart.alt = `images/${lijst[i]}`;
        kaart.className = "kaart"

        kaart.src = `images/achterkant.png`;
        kaart.id = lijst[i];
        kaart.style.gridColumn = `${col}`;
        kaart.style.gridRow = `${row}`;
        lijst.splice(i, 1);
        let speelveld = document.getElementById("speelveld");
        speelveld.appendChild(kaart);
        col++;
        if (col > global.AANTAL_HORIZONTAAL){
            row++;
            col = 1;
        }
    }
}

const juist = () =>{
    global.OPEN_KAART1.style.border = "green 5px solid";
    global.OPEN_KAART2.style.border = "green 5px solid";
    global.OPEN_KAART2.style.backgroundColor = "green";
}
const fout = () =>{
    global.OPEN_KAART1.style.border = "red 5px solid";
    global.OPEN_KAART2.style.border = "red 5px solid";
}
const getKaarten = () => {
    for (let i = 0; i < 2 * global.KAARTEN.length; i++) {
        let kaart = document.getElementById(`kaar${i}`);
            kaart.addEventListener()
    }
}

window.addEventListener("load", setup);