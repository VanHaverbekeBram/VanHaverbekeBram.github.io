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
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim()
    if (voornaam.length > 30){
        reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
    }else {
        clearError(txtVoornaam, errVoornaam);
    }
}
const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam === ""){
        reportError(txtFamilienaam, errFamilienaam, "verplicht veld");
    }else if (familienaam.length > 50){
        reportError(txtFamilienaam, errFamilienaam, "max. 50 karakters");
    }else {
        clearError(txtFamilienaam, errFamilienaam);
    }
}
const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();
    if (geboortedatum === ""){
        reportError(txtGeboortedatum, errGeboortedatum, "verplicht veld");
    } else if (geboortedatum.length === 10 && geboortedatum.indexOf('-') === 4 && geboortedatum.lastIndexOf('-') === 7){
        let jaar = geboortedatum.split('-')[0];
        let maand = geboortedatum.split('-')[1];
        let dag = geboortedatum.split('-')[2];
        if (isGetal(jaar)  && isGetal(maand) && isGetal(dag)){
            clearError(txtGeboortedatum, errGeboortedatum);
        }else {
            reportError(txtGeboortedatum, errGeboortedatum, "ongeldige waarden in de datum");
        }
    }else {
        reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj-mm-dd");
    }
}
const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    console.log(email);
    let index = email.indexOf("@");
    console.log(email.lastIndexOf("@"));
    console.log(email.length);



    if (email === ""){
        reportError(txtEmail, errEmail, "verplicht veld");
    }else if (index === email.indexOf("@") && index > 0 && index < email.length  - 1){
        clearError(txtEmail, errEmail);
    }else {
        reportError(txtEmail, errEmail, "ongeldig emailadres");
    }
}
const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtKinderen");
    let errAantalKinderen = document.getElementById("errKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();
    if (aantalKinderen < 0){
        reportError(txtAantalKinderen, errAantalKinderen, "is geen positief getal");
    }else if (aantalKinderen > 99){
        reportError(txtAantalKinderen, errAantalKinderen, "is te vruchtbaar");
    }else {
        clearError(txtAantalKinderen, errAantalKinderen);
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const reportError = (element, errElement, message) => {
    element.className="invalid";
    errElement.innerHTML = message;
};

const clearError = (element, errElement) => {
    element.className="";
    errElement.innerHTML = "";
};

window.addEventListener('load', setup);