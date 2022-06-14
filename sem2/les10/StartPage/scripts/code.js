let cards = [];
/*let cards = {
    swatches: []
};*/
const setup = () => {
    let zoekbtn = document.getElementById("search");
    zoekbtn.addEventListener("click", getUrl);
    localLoad();
}
class  Card {
    title;
    text;
    url;
    constructor(title, text, url) {
        this.title = title;
        this.text = text;
        this.url = url;

    }
}
const getUrl = () => {
    let commando = document.getElementById("commando").value;
    if (isValidCommand(commando) === true){
        switch (commando.charAt(1)){
            case 'g':
                zoek("www.google.com/search?q=", commando.substr(3), "Google");
                break;
            case 'y':
                zoek("www.youtube.com/results?search_query=", commando.substr(3), "Youtube")
                break;
            case 't':
                zoek("twitter.com/hashtag/", commando.substr(3), "Twitter")
                break;
            case 'i':
                zoek("instagram.com/explore/tags/", commando.substr(3), "Instagram")
                break;
            default:
                alert("unknown command")
        }
    }else {
        alert("invalid command")
    }
}
const isValidCommand = (commando) => {
    if (commando.charAt(0) === '/'){
        return true
    }else {

        return false;
    }
}
const zoek = (prefix, commando, title) => {
    let card = new Card(title, commando, `https://${prefix}${commando}`);
    cards.push(JSON.stringify(card));
    console.log(cards);
    placeCard(card);
    localSave();
    //window.location = `https://${prefix}${commando}`;
}
const localLoad = () => {
    let myCardsJson = localStorage.getItem("vives.cards");
    if (myCardsJson !== null){
        cards = JSON.parse(myCardsJson);
        cards.forEach(function (s)
        {
            console.log(s);
            placeCard(s);
        });
    }
    //console.log(myFavsJson);
}
const localSave = () =>{
    //Object -> JSON
    let savedCards = JSON.stringify(cards);
    console.log(savedCards);
    //JSON -> Object
    //let myFavs = JSON.parse(savedFavorites);

    localStorage.setItem("vives.cards", savedCards);
}
const placeCard = (cardJSON) => {
    let history = document.getElementById("history");
    let cardContainer = document.createElement("div");
    cardContainer.className = "card col-3";
    cardContainer.style.height = "250px";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    let text = document.createElement("p");
    let button = document.createElement("a");
    title.className = "card-title";
    title.textContent = cardJSON.title;
    text.className = "card-text";
    text.textContent = cardJSON.text;
    button.className = "btn btn-primary";
    button.textContent = "GO!"
    button.href = cardJSON.url;

    history.appendChild(cardContainer);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button);
}





window.addEventListener("load",setup);