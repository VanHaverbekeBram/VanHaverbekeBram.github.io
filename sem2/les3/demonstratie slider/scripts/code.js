let colorDemos;
let sliders;
const setup = () => {
	colorDemos = document.getElementsByClassName("colorDemo");
	sliders = document.getElementsByClassName("slider");
	for(s = 0; s < sliders.length; s++){
		sliders[s].addEventListener("change", update);
		sliders[s].addEventListener("input", update);
	}

	// maak het blokje rood
	//colorDemos[0].style.backgroundColor="white";
	update();
}

const update = (event) => {
	let r = document.getElementById("redOutput");
	let g = document.getElementById("greenOutput");
	let b = document.getElementById("blueOutput");
	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	r.value = "red " + red;
	g.value = "green " + green;
	b.value = "blue " + blue;
	sliders = document.getElementsByClassName("slider");
	colorDemos = document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor=`rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`;
}

window.addEventListener("load", setup);