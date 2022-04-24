let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAARTEN: ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"]
};

const setup = () => {
    plaatsKaarten();
    plaatsKaarten();
};

const plaatsKaarten = () =>{
    for (let i = 0; i < global.KAARTEN.length; i++){
        let kaart = document.createElement("img");
        //kaart.src = `images/${global.KAARTEN[i]}`;
        kaart.src = `images/achterkant.png`;
        kaart.id = global.KAARTEN[i];
        let speelveld = document.getElementById("speelveld");
        speelveld.appendChild(kaart);
    }
}

window.addEventListener("load", setup);