const setup = () => {
    let verjaardag = new Date(2023, 2, 20);
    let vandaag = Date.now();
    let verschil = verjaardag.getTime() - vandaag;
    let dagen = Math.abs(verschil)/ 3600 / 1000 / 24;
    console.log(`${dagen} dagen`);
}








window.addEventListener("load", setup);