let personen = [];
let cur_persoon;

let Persoon = class {
    id;
    voornaam;
    familienaam;
    dob;
    email;
    nkind;
    constructor(voornaam, familienaam, dob, email, nkind) {
        this.id = null;
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this.dob = dob;
        this.email = email;
        this.nkind = nkind;
    }
    get getID(){
        return this.id;
    }
    set setID(id){
        this.id = id;
    }
    get toString(){
        return `[${this.id}]: ${this.voornaam} ${this.familienaam} - ${this.email}`;
    }
    get getEmail(){
        return this.email;
    }
}

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    //valideer();
    let voornaam = document.getElementById("txtVoornaam").value;
    let achternaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalKinderen = document.getElementById("txtAantalKinderen").value;
    cur_persoon = new Persoon(voornaam, achternaam, geboortedatum, email, aantalKinderen);

        if (personen.some(x => x.email === cur_persoon.getEmail)) {
            console.log("user with email exists");
            cur_persoon.voornaam = voornaam;
            cur_persoon.familienaam = achternaam;
            cur_persoon.dob = geboortedatum;
            cur_persoon.email = email;
            cur_persoon.nkind = aantalKinderen;

            refrechOptions();
        }else {
            //bewerking

            /*cur_persoon = new Persoon(voornaam, achternaam, geboortedatum, email, aantalKinderen);*/
            personen.push(cur_persoon);
            cur_persoon.setID = personen.indexOf(cur_persoon);

            let option = document.createElement("option");
            option.textContent = cur_persoon.toString;
            option.id = cur_persoon.getID;
            let selection = document.getElementById("lstPersonen");
            selection.appendChild(option);
        }
    // indien ok, bewaar de ingegeven data.

        // een nieuw aangemaakte persoon voegen we toe






    // een bestaande persoon in de lijst passen we aan
        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten




};

const refrechOptions = () => {
    let selection = document.getElementById("lstPersonen");
    selection.innerHTML = ""
  personen.forEach(x => function (x) {
      let option = document.createElement("option");
      option.textContent = x.toString;
      option.id = cur_persoon.getID;
      selection.appendChild(option);
  })
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    cur_persoon = null;
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

};

const personenOnChange = (event) =>{
    cur_persoon = personen[event.target.selectedIndex];
    document.getElementById("txtVoornaam").value = cur_persoon.voornaam;
    document.getElementById("txtFamilienaam").value = cur_persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = cur_persoon.dob;
    document.getElementById("txtEmail").value = cur_persoon.email;
    document.getElementById("txtAantalKinderen").value = cur_persoon.nkind;

}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change" , personenOnChange);
};

window.addEventListener("load", setup);