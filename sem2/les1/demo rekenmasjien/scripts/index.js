
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
}
function mascaraDeleter(obj){
	obj.classList.value = "";
}
/* getal1 > getal2 --> oranje tekst | gele tekst
	* getal> < getal2 --> gele tekst | oranje tekst
	*  getal1 == getal2 --> paars | paars */
function makeover(g1,g2, txtLinks, txtRechts, txtOutput, resultaat){
	mascaraDeleter(txtOutput);
	mascaraDeleter(txtLinks);
	mascaraDeleter(txtRechts);
	if (resultaat < 0){
		//txtOutput.style.backgroundColor = "red";
		txtOutput.classList.add("makeRed");
	}
	if (g1 > g2){
		txtLinks.style.color = "orange";
		txtRechts.style.color = "yellow";
	}else if(g2 > g1){
		txtLinks.style.color = "yellow";
		txtRechts.style.color = "orange";
	}else {
		txtLinks.style.color = "purple";
		txtRechts.style.color = "purple";
	}
}



const optellen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	
	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1+g2;

	let resultaatTekst=g1+" + "+g2+" = "+resultaat;

	makeover(g1, g2, txtLinks, txtRechts, txtOutput, resultaat);
	txtOutput.innerHTML=resultaatTekst;
}

const aftrekken = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1-g2;

	let resultaatTekst=g1+" - "+g2+" = "+resultaat;
	makeover(g1, g2, txtLinks, txtRechts, txtOutput, resultaat);
	txtOutput.innerHTML=resultaatTekst;
}

const vermenigvuldigen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1*g2;

	let resultaatTekst=g1+" * "+g2+" = "+resultaat;

	makeover(g1, g2, txtLinks, txtRechts, txtOutput, resultaat);
	txtOutput.innerHTML=resultaatTekst;
}

const delen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
	let resultaat = g1/g2;

	let resultaatTekst=g1+" / "+g2+" = "+resultaat;

	makeover(g1, g2, txtLinks, txtRechts, txtOutput, resultaat);
	txtOutput.innerHTML=resultaatTekst;
}
 
window.addEventListener('load',setup); 

















