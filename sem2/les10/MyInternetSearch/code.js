let history = {
    cards: []
};

let newCard = null;

class Card{
    website;
    webCommand;
    searchField
    link;
    constructor(webCommand, searchField) {
        this.webCommand = webCommand;
        this.searchField = searchField;
    }
    set hyperlink(hyperlink) {
        this.link = hyperlink;
    }

    set site(site) {
        this.website = site;
    }
}

const setup = () => {
    let startbtn = document.getElementById("startbtn");
    startbtn.addEventListener("click", analyseCommand);
    localLoad();
}

const localSave = () => {
    //Object naar JSON
    let savedHistory = JSON.stringify(history);
    console.log(savedHistory);
    localStorage.setItem("vives.history", savedHistory);
}

const localLoad= () => {
    let myFavsJson = localStorage.getItem("vives.history");
    if(myFavsJson != null){
        history = JSON.parse(myFavsJson);
        for(let i=0; i<history.cards.length; i++){
            let card = history.cards[i];
            createCard(card.website, card.searchField, card.link);
        }
        history.cards.forEach(function () {

            }
        );
    }
    console.log(myFavsJson);
}


const analyseCommand = () => {
    let command = document.getElementById("command").value.trim();
    console.log(command);
    if(command.indexOf(" ")===2 && command.indexOf("/")===0){
        let webCommand = command.substring(0,2).toLowerCase();
        let searchField = command.substring(3).trim().toLowerCase();
        newCard = new Card(webCommand, searchField);
        lookup();
    } else{
        alert("Invalid command!")
    }
}

const lookup = () => {
    switch (newCard.webCommand){
        case "/g":
            newCard.hyperlink = `https://www.google.com/search?q=${newCard.searchField}`;
            newCard.site = "Google";
            break;
        case "/y":
            newCard.hyperlink = `https://www.youtube.com/results?search_query=${newCard.searchField}`;
            newCard.site = "Youtube";
            break;
        case "/t":
            newCard.hyperlink = `https://twitter.com/hashtag/${newCard.searchField}`;
            newCard.site = "Twitter";
            break;
        case "/i":
            newCard.hyperlink = `https://www.instagram.com/explore/tags/${newCard.searchField}/`;
            newCard.site = "Instagram";
            break;
        default:
            alert("Unknown command prefix");
    }
    if(newCard.link != null){
        window.open(newCard.link);
        createCard(newCard.website,newCard.searchField, newCard.link);
        history.cards.push(newCard);
        localSave();
        newCard = null;
    }
}

const createCard = (website, searchField, link) => {
    let dashboard = document.getElementById("history");
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let subscript = document.createElement("h3");
    let goBtn = document.createElement("input");
    goBtn.setAttribute("type", "button");
    goBtn.setAttribute("value", "Go!");
    goBtn.addEventListener("click", function (){window.open(link)});
    title.innerHTML = website;
    subscript.innerHTML = searchField;
    card.appendChild(title);
    card.appendChild(subscript);
    card.appendChild(goBtn);
    card.classList.add(website);
    dashboard.appendChild(card);
}



window.addEventListener("load", setup)