let myArray = ["Alpha", "Beta", "Omega", "Delta", "Gamma"];
console.log("Length:", myArray.length);
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
    i++
}
const voegNaamToe = name => {
    myArray.push(name);
    console.log("Item pushed: ", myArray[myArray.length - 1]);
}
let myPrompt = prompt("Tell me your name");
voegNaamToe(myPrompt);

console.log(myArray.toString());