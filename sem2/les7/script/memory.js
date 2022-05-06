let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    //AANTAL_GELIJKE_KAARTEN: 3,
    //openKaarten: [],
    KAARTEN: ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"],
    KAARTEN_HARD: ["hull1.png", "hull2.png", "hull3.png", "hull4.png", "hull5.png", "hull6.png", "hull7.png", "hull8.png",
        "turret1.png", "turret2.png", "turret3.png", "turret4.png", "turret5.png", "turret6.png", "turret7.png", "turret8.png"],
    openKaart1: null,
    openKaart2: null,
    timer: 0,
    interval: null,
    WAIT: 1000, //in milliesec
};

const setup = () => {
    plaatsTimer();
    let start = document.createElement("button");
    start.id = "startBtn";
    start.className = "start";
    start.textContent = "START";
    let timerveld = document.getElementById("timerveld");
    timerveld.appendChild(start);
    start.addEventListener("click", function(){
      spelen(true);
    });
    let hardMode = document.createElement("button"); // WIP
    hardMode.id = "startBtnHard";
    hardMode.className = "start";
    hardMode.textContent = "HARD MODE";
    timerveld.appendChild(hardMode);
    hardMode.addEventListener("click", function(){
        spelen(false);
    });
    for (let i = 0; i < global.AANTAL_GELIJKE_KAARTEN; i++) {
        global.openKaarten.push(`openKaart${i}`);
    }
    console.log(global.openKaarten);
};

const spelen = (isNormalMode) => {
    let buttons = document.getElementsByClassName("start");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].hidden = true;
    }
    createGrid();
    plaatsKaarten(isNormalMode);
    startTimer();
    let kaarten = document.getElementsByClassName("kaart");
    for (let i = 0; i < kaarten.length; i++){
        kaarten[i].addEventListener("click",draaiOm);
    }
}

const draaiOm = (event) => {
    if (event.target !== global.openKaart1 && event.target !== global.openKaart2) {
        let kaart = event.target;
        if (global.openKaart1 === null) {
            global.openKaart1 = kaart;
            draai(kaart);
        }else if (global.openKaart2 === null) {
            global.openKaart2 = kaart;
            draai(kaart);
            if (global.openKaart2.id === global.openKaart1.id){
                juist();
               setTimeout(verwijder, global.WAIT)
            }else {
                fout();
                setTimeout(draaiTerug, global.WAIT);
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
    global.openKaart1.remove();
    global.openKaart2.remove();
    global.openKaart1 = null;
    global.openKaart2 = null;


}

const draaiTerug = () => {
    draai(global.openKaart1);
    draai(global.openKaart2);
    global.openKaart1.style.border = "none";
    global.openKaart2.style.border = "none";
    global.openKaart1 = null;
    global.openKaart2 = null;
}
const plaatsKaarten = (isNormalMode) =>{
    let lijst;
    if (isNormalMode === true){
        lijst = global.KAARTEN.concat(global.KAARTEN);
    }else {
        lijst = global.KAARTEN_HARD;
    }

    let col = 1;
    let row = 1;
    let speelveld = document.getElementById("speelveld");
    speelveld.style.border = "black 3px solid";
    while (lijst.length > 0){
        let i = Math.floor(Math.random() * lijst.length);
        let kaart = document.createElement("img");
        kaart.alt = `images/${lijst[i]}`;
        kaart.className = "kaart"
        kaart.src = `images/achterkant.png`;
        kaart.id = lijst[i].substr(lijst[i].indexOf(".png") - 1, 1);
        kaart.style.gridColumn = `${col}`;
        kaart.style.gridRow = `${row}`;
        lijst.splice(i, 1);
        speelveld.appendChild(kaart);
        col++;
        if (col > global.AANTAL_HORIZONTAAL){
            row++;
            col = 1;
        }
    }
}

const juist = () =>{
    global.openKaart1.style.border = "green 5px solid";
    global.openKaart2.style.border = "green 5px solid";
    let speelveld = document.getElementById("speelveld");
    if (speelveld.children.length <= 2){ // 2 laatste kaarten die nog verwijderd moeten worden
        console.log("Deny is een geniale man");
        stopTimer();
        setTimeout(gewonnen, global.WAIT);
    }
}
const fout = () =>{
    global.openKaart1.style.border = "red 5px solid";
    global.openKaart2.style.border = "red 5px solid";
}

const plaatsTimer = () => {
    let timer = document.createElement("p");
    global.timer = 0;
    timer.id = "timer";
    timer.textContent = `Time: ${global.timer}s`;
    timer.hidden = true;
    let body = document.getElementById("timerveld");
    body.appendChild(timer);
}

const updateTimer = () => {
  let timer = document.getElementById("timer");
  global.timer++;
  timer.textContent = `Time: ${global.timer}s`;
}

const startTimer = () => {
    let timer = document.getElementById("timer");
    global.timer = 0;
    timer.textContent = `Time: ${global.timer}s`
    timer.hidden = false;
  global.interval = setInterval(updateTimer, 1000);
}

const stopTimer = () => {
    let timer = document.getElementById("timer");
    timer.textContent = `Finished in: ${global.timer}s`;
    clearInterval(global.interval);
}

const gewonnen = () => {
    let buttons = document.getElementsByClassName("start");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].hidden = false;
    }
    let speelveld = document.getElementById("speelveld");
    speelveld.style.border = "none";
}

const createGrid = () => {
    let speelveld = document.getElementById("speelveld");
    let rows = "1fr";
    let cols = "1fr";
    for (let i = 1; i < Math.ceil(2 * global.KAARTEN.length / (global.AANTAL_HORIZONTAAL)); i++){
        rows += " 1fr";
    }
    for (let i = 1; i < global.AANTAL_HORIZONTAAL; i++){
        cols += " 1fr";
    }
    speelveld.style.gridTemplateColumns = cols;
    speelveld.style.gridTemplateRows = rows;
}

/*const genereerKaartenLijst = (isNormalMode) => {
    if (isNormalMode === true){
        let lijst = global.KAARTEN;
        for (let i = 0; i < global.AANTAL_GELIJKE_KAARTEN; i++) {
            lijst = lijst.concat(global.KAARTEN);
        }
    }else {
        let lijst = global.KAARTEN_HARD;
    }
    return lijst;
}*/

window.addEventListener("load", setup);