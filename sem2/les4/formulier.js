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
  let an = document.getElementById("an").value.toLowerCase();
  let index = 0;
  let lastIndex = 0;
  let aantal = -1;
  while (lastIndex <= index){
      lastIndex = index;
      index = an.indexOf("an", index) + 1;
      aantal++;
  }
  console.log(aantal);

}

const telAn2 = () => {
    let an = document.getElementById("an").value.toLowerCase();
    let index = an.length -1;
    let lastIndex = an.length;
    let aantal = -1;
    while (index > 0){
        lastIndex = index;
        index = an.lastIndexOf("an", index) - 1;
        aantal++;
        console.log(index);
    }
    console.log(aantal);

}

addEventListener("load",setup);