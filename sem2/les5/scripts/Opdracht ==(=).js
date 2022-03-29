const setup = () => {
    oef1();
    oef2();
    oef3();

}

const oef1 = () => {
    let str1 = "Vicotr";
    let str2 = "Vicotr";
    console.log("oef1");
    console.log(str1 == str2);
    console.log(str1 === str2);
}

const oef2 = () => {
    let str1 = "Vicotr";
    let str2 = "Vicotr is een gekke man".slice(0,6);
    console.log("oef2");
    console.log(str1 == str2);
    console.log(str1 === str2);
}
const oef3 = () => {
    let str1 = "Vic"+"otr";
    let str2 = "Vicotr is een gekke man".slice(0,6);
    console.log("oef3")
    console.log(str1 == str2);
    console.log(str1 === str2);
}
window.addEventListener("load", setup);