let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 ,// id van de timeout timer, zodat we die kunnen annuleren
    current_pic: 0,
    loop: null,
    WIDTH: null,
    HEIGHT: null
};


const setup = () => {
    let obj_pic = document.getElementById("obj_pic");
    obj_pic.addEventListener("click", trigger   );
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
    let frame = document.getElementById("playField");
    global.WIDTH = frame.clientWidth;
    global.HEIGHT = frame.clientHeight;
    console.log(global.WIDTH);
    console.log(global.HEIGHT);
};

const trigger = (event) => {
    clearInterval(global.loop);
  if (event.target.hasAttribute("isbomb")){
      let btnStart = document.getElementById("btnStart");
      btnStart.hidden = false;
      alert("Boom bitch!");
  }else {
      global.score += 1;
      changePic();
      global.loop = setInterval(changePic, global.MOVE_DELAY);
      let scorebord = document.getElementById("scorebord");
      scorebord.textContent = `Score: ${global.score}`;
  }
}

const startGame = (event) => {
    global.score = 0;
    global.loop = setInterval(changePic, global.MOVE_DELAY);
    event.target.hidden = true;
};

const changePic = () => {
    let obj_pic = document.getElementById("obj_pic");
    global.current_pic = Math.floor(Math.random()*global.IMAGE_COUNT);
    if (obj_pic.hasAttribute("isbomb")){
        obj_pic.removeAttribute("isbomb");
    }
    if (global.current_pic === 0){
        obj_pic.setAttribute("isbomb", "");
    }

    obj_pic.src = `${global.IMAGE_PATH_PREFIX}${global.current_pic}${global.IMAGE_PATH_SUFFIX}`;
    let x = Math.floor(Math.random()*(global.WIDTH - global.IMAGE_SIZE));
    let y = Math.floor(Math.random()*(global.HEIGHT - global.IMAGE_SIZE));
    obj_pic.style.left = x + "px";
    obj_pic.style.top = y + "px";

}


window.addEventListener("load", setup);


