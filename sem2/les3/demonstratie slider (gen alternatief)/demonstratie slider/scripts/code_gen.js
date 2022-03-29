let colorbox;
let red = green = blue = 0;
const colors = ["red", "green", "blue"];

const setup = () => {
    colorbox = document.getElementById("colorBox");
    let container = document.getElementById("container");


    for(s = 0; s < 3; s++)
    {
        let slider = document.createElement("input");
        slider.setAttribute("type", "range");
        slider.setAttribute("min", 0);
        slider.setAttribute("max", 255);
        slider.setAttribute("value", 0);
        slider.setAttribute("outputid", `slider_${s}`);
        slider.setAttribute("colortype", colors[s]);

        slider.classList.add("slider");

        slider.addEventListener("change", update);
        slider.addEventListener("input", update);

        let output = document.createElement("output");
        output.setAttribute("id", `slider_${s}`);

        container.appendChild(slider);
        container.appendChild(output);
    }
}

const update = (event) => {
    switch (event.target.getAttribute("colortype"))
    {
        case colors[0]:
            red = event.target.value;
            break;
        case colors[1]:
            green = event.target.value;
            break;
        case colors[2]:
            blue = event.target.value;
            break;
        default:
            break;
    }
    let gelinkte_output = document.getElementById(event.target.getAttribute("outputid"));
    gelinkte_output.value = event.target.value;
    colorbox.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("load", setup);