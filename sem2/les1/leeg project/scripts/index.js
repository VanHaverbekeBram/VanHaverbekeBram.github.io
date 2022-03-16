const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    console.log(window.location);
    setTimeout(() => {window.location = "https://vives.be";}, 10000);
}

window.addEventListener("load", setup);