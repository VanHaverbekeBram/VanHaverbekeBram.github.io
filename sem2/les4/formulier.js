const setup = () => {
    let submit = document.getElementById("submit");
    let an = document.getElementById("an");
    submit.addEventListener("click", spaties);
    an.addEventListener("click", telAn);
}

const spaties = () => {
    let first_name = document.getElementById("first_name").value;
    maakMetSpaties(first_name);
}

const maakMetSpaties = (woord) => {
    let newWoord = "";
    for (let i = 0; i < woord.length; i++) {
        newWoord += " " + woord[i];
    }
    console.log(newWoord);

}

const telAn = () => {
  let an = document.getElementById("an").value;
  print(an);

}

addEventListener("load",setup);