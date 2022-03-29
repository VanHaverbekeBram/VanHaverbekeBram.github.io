const setup = () => {
    let woord = "onoorbaar";
    let lijst = [];
    for (let i = 0; i < woord.length - 2; i++){
        lijst.push(woord.substr(i,3));
    }
    console.log(lijst);
}

window.addEventListener("load", setup);