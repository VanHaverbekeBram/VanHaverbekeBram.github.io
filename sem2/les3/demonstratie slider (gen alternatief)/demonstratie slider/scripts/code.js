let colorDemos;
let sliders;

const setup = () => {
	colorDemos = document.getElementsByClassName("colorDemo");
	sliders = document.getElementsByClassName("slider");

	for(s = 0; s < sliders.length; s++)
	{
		sliders[s].addEventListener("change", update);
		sliders[s].addEventListener("input", update);
	}

	//start kleur
	update();
	//colorDemos[0].style.backgroundColor="white";
}

const update = (event) => {
	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;
	let r_out = document.getElementById("red_output");
	let g_out = document.getElementById("green_output");
	let b_out = document.getElementById("blue_output");

	r_out.value = red;
	g_out.value = green;
	b_out.value = blue;
	colorDemos[0].style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("load", setup);