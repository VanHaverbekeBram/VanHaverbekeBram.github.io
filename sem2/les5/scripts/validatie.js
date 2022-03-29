const setup = () => {
    let validatie = document.getElementById("validate");
    validatie.addEventListener('click', valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
}

const valideerVoornaam = () => {
    let voornaam = document.getElementById("voornaam").value.trim();
    if (voornaam.length > 30){
        console.log("max. 30 karakters");
    }else {
        console.log("geldige voornaam");
    }
}
const valideerFamilienaam = () => {
    let familienaam = document.getElementById("familienaam").value.trim();
    if (familienaam === ""){
        console.log("verplicht veld");
    }else if (familienaam.length > 50){
        console.log("max 50 karakters");
    }else {
        console.log("geldige familienaam");
    }
}
const valideerGeboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum").value.trim();
    if (geboortedatum === ""){
        console.log("verplicht veld")
    } else if (geboortedatum.length === 10 && geboortedatum.indexOf('-') === 4 && geboortedatum.lastIndexOf('-') === 7){
        let jaar = geboortedatum.split('-')[0];
        let maand = geboortedatum.split('-')[1];
        let dag = geboortedatum.split('-')[2];
        if (isGetal(jaar)  && isGetal(maand) && isGetal(dag)){
            console.log("geldige datum");
        }else {
            console.log("ongeldige waarden in de datum");
        }
    }else {
        console.log("formaat is niet jjjj-mm-dd");
    }
}
const valideerEmail = () => {
    let email = document.getElementById("email").value.trim();
    console.log(email);
    let index = email.indexOf("@");
    console.log(email.lastIndexOf("@"));
    console.log(email.length);


    email.index
    if (email === ""){
        console.log("verplicht veld");
    }else if (index === email.indexOf("@") && index > 0 && index < email.length  - 1){
        console.log("geldig emailadres");
    }else {
        console.log("ongeldig emailadres");
    }
}
const valideerAantalKinderen = () => {
    let aantalKinderen = document.getElementById("kinderen").value.trim();
    if (aantalKinderen < 0){
        console.log("is geen positief getal");
    }else if (aantalKinderen > 99){
        console.log("is te vruchtbaar");
    }else {
        console.log("geldig aantal kinderen");
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener('load', setup);