const setup = () => {
    let cities = [];
    while (true)
    {
        let response = prompt("Gemeente:");
        if (response === ""){continue;}
        if (response == null || response.trim().toLowerCase() == "stop"){break;}
        cities.push(response.trim());
    }//hier zijn we na de break
    console.log(cities);
    console.log(cities.sort());
    displayCities(cities);


}

const displayCities = (cities) =>{
    let myBody = document.getElementById("dropdown");
    //let myBody = document.getElementsByTagName("body");
    console.log(myBody);

    let dropdown = document.createElement("select");
    myBody.appendChild(dropdown);
    cities.forEach((city) =>  {
        let option = document.createElement("option");
        option.setAttribute("value", city);
        option.textContent = city;
        dropdown.appendChild(option);
    })
}


window.addEventListener("load", setup);