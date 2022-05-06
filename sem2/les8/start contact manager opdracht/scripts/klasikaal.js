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
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this.dob = dob;
        this.email = email;
        this.nkind = nkind;
    }
    get getID()
    {
        return this.id;
    }
    set setID(id)
    {
        this.id = id;
    }
    get toString()
    {
        return `[${this.id}]: ${this.voornaam} ${this.familienaam} - ${this.email}`;
    }
};
const bewaarBewerktePersoon = () => {
    //valideer();
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalkinderen = document.getElementById("txtAantalKinderen").value;

    if (cur_persoon != null)
    {
        if(personen.some(x => x.id === cur_persoon.getID))
        {
            console.log("user with id ", cur_persoon.getID, " exists");
            // BEWERKING
            cur_persoon.voornaam = voornaam;
            cur_persoon.familienaam = familienaam;
            cur_persoon.dob = geboortedatum;
            cur_persoon.email = email;
            cur_persoon.nkind = aantalkinderen;
            //personen.forEach(x => console.log(x.voornaam, x.familienaam, x.dob, x.email, x.kind))
            refreshOptions();
        }

    }
    else
    {
        //TOEVOEGEN
        cur_persoon = new Persoon(voornaam, familienaam, geboortedatum, email, aantalkinderen);
        personen.push(cur_persoon);
        cur_persoon.setID = personen.indexOf(cur_persoon);

        refreshOptions();
    }
};
const refreshOptions = () =>
{
    let selection = document.getElementById("lstPersonen");
    selection.innerHTML = "";
    personen.forEach(function(x)
        {
            let option = document.createElement("option");
            option.innerText = x.toString;
            selection.appendChild(option)
        }
    )
}
const bewerkNieuwePersoon = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    cur_persoon = null;
};

const personenOnChange = (event) =>
{
    cur_persoon = personen[event.target.selectedIndex];
    document.getElementById("txtVoornaam").value = cur_persoon.voornaam;
    document.getElementById("txtFamilienaam").value = cur_persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = cur_persoon.dob;
    document.getElementById("txtEmail").value = cur_persoon.email;
    document.getElementById("txtAantalKinderen").value = cur_persoon.nkind;
}
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", personenOnChange)
};

window.addEventListener("load", setup);