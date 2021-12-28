// console.log("Hey there"); //js print statement
/*
var a;
a = 1;
let b = 2; // always use this type of var
const PI = 22 / 7;
*/

/*
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(8);
console.log(arr);
*/

/*
for (let i = 0; i < 5; i++) {
    
}
*/
/*
let i = 5;
while (i < 8) {
    console.log("Hey");
    i++;
}
*/
/*
function namein() {
    console.log("I am from name in");
}

var nameout = () => {
    console.log("I am arrow function");
}*/

/*
var obj = {
    "name": "Aalain",
    "Age": 19,
    "Profession": "Software Engineer"
}*/

// DOM (Document Object Model)

let namein = () => {
    document.querySelector("img").style.cssText = `transform: rotate(450deg); transition: 0.5s;`;
    let arr = ["#projects", "#about", "#github", "#copy", "#theme"];
    for (let i = 0; i < 5; i++) {
        document.querySelector(arr[i]).style.cssText = `opacity:0; transition: 0.5s;`;
    }
    document.querySelector(".main").style.cssText = `background-size:110%;
    transition: 0.5s;`;
}

let nameout = () => {
    document.querySelector("img").style.cssText = `transform: rotate(90deg);
    transition: 0.5s;`;
    let arr = ["#projects", "#about", "#github", "#copy", "#theme"];
    for (let i = 0; i < 5; i++) {
        document.querySelector(arr[i]).style.cssText = `opacity:1; transition: 0.5s;`;
    }
    document.querySelector(".main").style.cssText = `
    background-size: cover;
    transition: 0.5s;`;
}

let darkMode = () => {
    document.querySelector("img").style.cssText = `transform: rotate(270deg);
    transition: 0.5s;`;
    document.querySelector("#theme").style.cssText = `background-color: white; transition: 0.5s;`;
    document.querySelector(".main").style.cssText = `background:url("./images/dark.png"); background-position: center;
    background-size: cover;
    transition: 0.5s;`;
    let arr = ["#projects", "#about", "#github", "#copy"];
    for (let i = 0; i < 4; i++) {
        document.querySelector(arr[i]).style.cssText = `color: rgba(225,225,225,0.5) !important; transition: 0.5s;`;
    }
    document.querySelector("#name").style.cssText = "color: white !important;"
}

let lightMode = () => {
    document.querySelector("img").style.cssText = `transform: rotate(90deg);
    transition: 0.5s;`;
    document.querySelector("#theme").style.cssText = `background-color: black; transition: 0.5s;`;
    document.querySelector(".main").style.cssText = `background:url("./images/white.png"); background-position: center;
    background-size: cover;
    transition: 0.5s;`;
    let arr = ["#projects", "#about", "#github", "#copy"];
    for (let i = 0; i < 4; i++) {
        document.querySelector(arr[i]).style.cssText = `color: rgba(0,0,0,0.5) !important; transition: 0.5s;`;
    }
    document.querySelector("#name").style.cssText = "color: black !important;"
}



let projectin = () => {
    document.querySelector("#projects").style.cssText = `color: red !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(30deg) translate(-250px);
    transition: 0.5s;`;
}

let projectout = () => {
    document.querySelector("#projects").style.cssText = `color: rgba(0,0,0,0.5) !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(90deg); transition: 0.5s;`;
}

let aboutin = () => {
    document.querySelector("#about").style.cssText = `color: red !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(150deg) translate(-250px);
    transition: 0.5s;`;
}

let aboutout = () => {
    document.querySelector("#about").style.cssText = `color: rgba(0,0,0,0.5) !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(90deg); transition: 0.5s;`;
}

let gitin = () => {
    document.querySelector("#github").style.cssText = `color: red !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(-30deg) translate(-250px);
    transition: 0.5s;`;
}

let gitout = () => {
    document.querySelector("#github").style.cssText = `color: rgba(0,0,0,0.5) !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(90deg); transition: 0.5s;`;
}

let copyin = () => {
    document.querySelector("#copy").style.cssText = `color: red !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(210deg) translate(-250px);
    transition: 0.5s;`;
}

let copyout = () => {
    document.querySelector("#copy").style.cssText = `color: rgba(0,0,0,0.5) !important; transition: 0.5s;`;
    document.querySelector("img").style.cssText = `transform: rotate(90deg); transition: 0.5s;`;
}