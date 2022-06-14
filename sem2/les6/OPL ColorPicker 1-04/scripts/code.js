let swatch = null;

const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	swatch = document.getElementById("swatch");
	let btnsave = document.getElementById("btnSave");
	btnsave.addEventListener("click", save);

	update();
};

const save = () => {
	console.log("Saving template");
	console.log(swatch.style.backgroundColor);
	buildTemplate();
};

const buildTemplate = () =>
{
	//Get template holder
	let template_holder = document.getElementById("templateHolder");

	//Create Template
	let template = document.createElement("div");
	template.classList.add("template");
	template.style.backgroundColor = swatch.style.backgroundColor;

	let close = document.createElement("input");
	close.setAttribute("type", "button");
	close.setAttribute("value", "X");
	close.addEventListener("click", deleteTemplate);
	template.appendChild(close);

	template.addEventListener("click", applyTemplate); // Register click event
	template_holder.appendChild(template); // Add to div holder
};

const extractColors = (colors) =>
{
	let vals = colors.substring(colors.indexOf('(') +1, colors.length -1).split(', ');
	return {
		'r': vals[0],
		'g': vals[1],
		'b': vals[2]
	};
};

const applyTemplate = (event) =>
{
	let colors = extractColors(event.target.style.backgroundColor);
	swatch.style.backgroundColor = "rgb("+colors['r']+","+colors['g']+","+colors['b']+")";
};

const deleteTemplate = (event) =>
{
	let template_holder = document.getElementById("templateHolder");
	chosenTemplate = event.target.parentElement;
	template_holder.removeChild(chosenTemplate);
	//chosenTemplate.parentElement.removeChild(chosenTemplate);
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

window.addEventListener("load", initialize);