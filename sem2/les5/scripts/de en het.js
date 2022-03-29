const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel. Hij gooide hem dan weg. De arts is gelukkig";
    console.log(zin.replaceAll(" de "," het ").replaceAll("De ", "Het "));

}

window.addEventListener("load", setup);